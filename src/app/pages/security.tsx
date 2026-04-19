import { Link } from 'react-router';
import { ArrowLeft, Skull, Shield, Lock, Key, Bell, Eye } from 'lucide-react';
import { useState } from 'react';

export function Security() {
  const [autoArm, setAutoArm] = useState(false);
  const [motionDetection, setMotionDetection] = useState(true);
  const [audioAlerts, setAudioAlerts] = useState(true);
  const [recordingEnabled, setRecordingEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3lhbiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 py-8 max-w-4xl">
        <header className="mb-8 border-b border-cyan-500/30 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <Skull className="w-10 h-10 text-cyan-400" />
              <div>
                <h1 className="text-cyan-400 uppercase tracking-wider">Security Settings</h1>
                <p className="text-gray-500 text-sm">System Configuration & Access Control</p>
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-cyan-400" />
              <h2 className="text-cyan-400 uppercase tracking-wider">Surveillance Settings</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-black/40 rounded border border-cyan-500/20">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-gray-200">Auto-Arm on Startup</p>
                    <p className="text-sm text-gray-500">Automatically arm system when launched</p>
                  </div>
                </div>
                <button
                  onClick={() => setAutoArm(!autoArm)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    autoArm ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    autoArm ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-black/40 rounded border border-cyan-500/20">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-gray-200">Motion Detection</p>
                    <p className="text-sm text-gray-500">Trigger capture on movement detection</p>
                  </div>
                </div>
                <button
                  onClick={() => setMotionDetection(!motionDetection)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    motionDetection ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    motionDetection ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-black/40 rounded border border-cyan-500/20">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-gray-200">Audio Briefings</p>
                    <p className="text-sm text-gray-500">Enable voice threat assessments</p>
                  </div>
                </div>
                <button
                  onClick={() => setAudioAlerts(!audioAlerts)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    audioAlerts ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    audioAlerts ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-black/40 rounded border border-cyan-500/20">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-gray-200">Continuous Recording</p>
                    <p className="text-sm text-gray-500">Save all captured footage to archive</p>
                  </div>
                </div>
                <button
                  onClick={() => setRecordingEnabled(!recordingEnabled)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    recordingEnabled ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    recordingEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-cyan-400" />
              <h2 className="text-cyan-400 uppercase tracking-wider">Access Control</h2>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-black/40 rounded border border-cyan-500/20">
                <p className="text-gray-200 mb-2">Security Clearance Level</p>
                <p className="text-cyan-400 font-mono">TOP SECRET // SCI</p>
              </div>

              <div className="p-4 bg-black/40 rounded border border-cyan-500/20">
                <p className="text-gray-200 mb-2">Authorized User</p>
                <p className="text-cyan-400 font-mono">AGENT-001</p>
              </div>

              <div className="p-4 bg-black/40 rounded border border-cyan-500/20">
                <p className="text-gray-200 mb-2">Session Token</p>
                <p className="text-cyan-400 font-mono text-sm">X7K9-P2LM-QW45-RT89</p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Key className="w-6 h-6 text-cyan-400" />
              <h2 className="text-cyan-400 uppercase tracking-wider">Encryption</h2>
            </div>

            <div className="p-4 bg-black/40 rounded border border-cyan-500/20">
              <div className="flex justify-between mb-2">
                <span className="text-gray-200">Encryption Protocol:</span>
                <span className="text-green-400">AES-256-GCM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-200">Status:</span>
                <span className="text-green-400">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 pt-6 border-t border-cyan-500/30 text-center text-gray-600 text-xs">
          <p className="uppercase tracking-wider">Classified // Top Secret // Eyes Only</p>
        </footer>
      </div>
    </div>
  );
}