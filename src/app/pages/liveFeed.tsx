import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { WebcamCapture } from '../components/WebcamCapture';
import { ArrowLeft, Shield, Camera, Eye } from 'lucide-react';

export function LiveFeed() {
  const [faceDetection, setFaceDetection] = useState(true);
  const [motionDetection, setMotionDetection] = useState(true);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (motionDetection) {
        setIsMonitoring(true);

        setTimeout(() => {
          setIsMonitoring(false);
        }, 1000);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [motionDetection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3lhbiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 py-8 max-w-7xl">
        <header className="mb-8 border-b border-cyan-500/30 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>

              <Shield className="w-10 h-10 text-cyan-400" />

              <div>
                <h1 className="text-cyan-400 uppercase tracking-wider">
                  Live Feed
                </h1>
                <p className="text-gray-500 text-sm">
                  Real-time camera monitoring
                </p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-cyan-400 font-mono">
                {new Date().toLocaleDateString()}
              </div>
              <div className="text-gray-500 text-sm font-mono">
                {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          {/* BIGGER CAMERA SECTION */}
          <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5">
              <Camera className="w-6 h-6 text-cyan-400" />
              <h2 className="text-cyan-400 uppercase tracking-wider">
                Camera Feed
              </h2>
            </div>

            <div className="min-h-[550px] flex items-center justify-center">
              <WebcamCapture
                onCapture={() => {}}
                isActive={isMonitoring}
              />
            </div>
          </div>

          {/* ONLY DETECTION FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-cyan-400" />
                <h3 className="text-cyan-400 uppercase tracking-wider">
                  Facial Detection
                </h3>
              </div>

              <p className="text-sm text-gray-400 mb-4">
                Detect faces through live camera feed
              </p>

              <button
                onClick={() => setFaceDetection(!faceDetection)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  faceDetection ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    faceDetection ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-cyan-400" />
                <h3 className="text-cyan-400 uppercase tracking-wider">
                  Motion Detection
                </h3>
              </div>

              <p className="text-sm text-gray-400 mb-4">
                Detect movement and activity in frame
              </p>

              <button
                onClick={() => setMotionDetection(!motionDetection)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  motionDetection ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    motionDetection ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-8 pt-6 border-t border-cyan-500/30 text-center text-gray-600 text-xs">
          <p>Monitoring dashboard</p>
        </footer>
      </div>
    </div>
  );
}