import { Link } from "react-router";
import { Camera, Shield, AlertTriangle, Skull } from "lucide-react";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3lhbiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        <header className="mb-8 border-b border-cyan-500/30 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skull className="w-10 h-10 text-cyan-400" />
              <div>
                <h1 className="text-cyan-400 uppercase tracking-wider">
                  Project Argus
                </h1>
                <p className="text-gray-500 text-sm">
                  Advanced Surveillance Intelligence System
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2git gap-6 max-w-6xl mx-auto">
          <Link to="/live-feed" className="group">
            <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-8 backdrop-blur-sm hover:border-cyan-500 transition-all cursor-pointer">
              <Camera className="w-16 h-16 mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <h2 className="text-center text-cyan-400 uppercase tracking-wider mb-2">
                Live Feed
              </h2>
              <p className="text-center text-gray-500 text-sm">
                Access surveillance cameras
              </p>
            </div>
          </Link>

          <Link to="/security" className="group">
            <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-8 backdrop-blur-sm hover:border-cyan-500 transition-all cursor-pointer">
              <Shield className="w-16 h-16 mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <h2 className="text-center text-cyan-400 uppercase tracking-wider mb-2">
                Security
              </h2>
              <p className="text-center text-gray-500 text-sm">
                System configuration
              </p>
            </div>
          </Link>

        </div>

        <div className="mt-12 bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm max-w-6xl mx-auto">
          <h3 className="text-cyan-400 uppercase tracking-wider mb-4">
            System Status
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">System:</span>
              <span className="text-green-400">ONLINE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Cameras:</span>
              <span className="text-green-400">1 ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Threat Level:</span>
              <span className="text-green-400">LOW</span>
            </div>
          </div>
        </div>

        <footer className="mt-8 pt-6 border-t border-cyan-500/30 text-center text-gray-600 text-xs">
          <p className="uppercase tracking-wider">
            Classified // Top Secret // Eyes Only
          </p>
        </footer>
      </div>
    </div>
  );
}
