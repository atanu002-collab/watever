import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Shield, Skull, Camera, ScanFace } from 'lucide-react';

export function Auth() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [status, setStatus] = useState<'idle' | 'scanning' | 'analyzing' | 'success' | 'denied'>('idle');
  const [cameraError, setCameraError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraError(false);
    } catch (err) {
      console.error('Camera access denied:', err);
      setCameraError(true);
    }
  };

  const handleScan = () => {
    setIsScanning(true);
    setStatus('scanning');
    setScanProgress(0);

    // Simulate scanning progress
    const progressInterval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Capture face after 2 seconds
    setTimeout(() => {
      if (videoRef.current && canvasRef.current) {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        if (context) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0);
        }
      }

      setStatus('analyzing');

      // Randomly authorize or deny (70% success rate for demo)
      setTimeout(() => {
        const isAuthorized = Math.random() > 0.3;

        if (isAuthorized) {
          setStatus('success');

          setTimeout(() => {
            navigate('/dashboard');
          }, 2000);
        } else {
          setStatus('denied');

          setTimeout(() => {
            navigate('/unauthorized');
          }, 2000);
        }
      }, 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100 flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3lhbiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="bg-black/60 border border-cyan-500/30 rounded-lg p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center mb-8">
            <Skull className="w-16 h-16 text-cyan-400 mb-4" />
            <h1 className="text-cyan-400 uppercase tracking-wider text-2xl mb-2">Project Argus</h1>
            <p className="text-gray-500 text-sm text-center">Advanced Surveillance Intelligence System</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-cyan-400" />
              <h2 className="text-cyan-400 uppercase tracking-wider">Biometric Authorization</h2>
            </div>
            <p className="text-gray-400 text-sm">Position your face in the camera frame for facial recognition scan.</p>
          </div>

          <div className="relative mb-6">
            {cameraError ? (
              <div className="bg-black/60 border-2 border-yellow-500/50 rounded-lg p-12 text-center">
                <Camera className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-yellow-400 uppercase tracking-wider mb-2">Camera Access Required</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Please allow camera access in your browser to use facial recognition.
                </p>
                <button
                  onClick={startCamera}
                  className="bg-cyan-600/20 border-2 border-cyan-500 text-cyan-400 px-6 py-2 rounded uppercase tracking-wider hover:bg-cyan-600/30 transition-all"
                >
                  Enable Camera
                </button>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-auto rounded-lg border-2 border-cyan-500/50"
                />
                <canvas ref={canvasRef} className="hidden" />

            {status === 'scanning' && (
              <div className="absolute inset-0 border-4 border-cyan-400 rounded-lg pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400" style={{ width: `${scanProgress}%` }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ScanFace className="w-32 h-32 text-cyan-400 opacity-50" />
                </div>
              </div>
            )}

            {status === 'success' && (
              <div className="absolute inset-0 bg-green-500/20 border-4 border-green-500 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-green-400 text-2xl mb-2">✓</div>
                  <p className="text-green-400 uppercase tracking-wider">Access Granted</p>
                </div>
              </div>
            )}

            {status === 'denied' && (
              <div className="absolute inset-0 bg-red-500/20 border-4 border-red-500 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-red-400 text-2xl mb-2">✗</div>
                  <p className="text-red-400 uppercase tracking-wider">Access Denied</p>
                </div>
              </div>
            )}
              </>
            )}
          </div>

          {!cameraError && (
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-cyan-400">Status:</span>
              <span className={`uppercase tracking-wider ${
                status === 'idle' ? 'text-gray-400' :
                status === 'scanning' ? 'text-yellow-400' :
                status === 'analyzing' ? 'text-blue-400' :
                status === 'success' ? 'text-green-400' :
                'text-red-400'
              }`}>
                {status === 'idle' ? 'Ready' :
                 status === 'scanning' ? 'Scanning Face...' :
                 status === 'analyzing' ? 'Analyzing Biometrics...' :
                 status === 'success' ? 'Authorized' :
                 'Unauthorized'}
              </span>
            </div>
            {status === 'scanning' && (
              <div className="w-full bg-black/40 rounded-full h-2">
                <div
                  className="bg-cyan-400 h-2 rounded-full transition-all duration-200"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
            )}
          </div>
          )}

          {!cameraError && (
          <button
            onClick={handleScan}
            disabled={isScanning}
            className="w-full bg-cyan-600/20 border-2 border-cyan-500 text-cyan-400 py-3 rounded uppercase tracking-wider hover:bg-cyan-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Camera className="w-5 h-5" />
            {isScanning ? 'Scanning...' : 'Begin Facial Scan'}
          </button>
          )}

          <div className="mt-8 pt-6 border-t border-cyan-500/30 text-center">
            <p className="text-gray-600 text-xs uppercase tracking-wider">Classified // Top Secret // Eyes Only</p>
          </div>
        </div>
      </div>
    </div>
  );
}