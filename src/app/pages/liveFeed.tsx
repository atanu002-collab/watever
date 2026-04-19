import { Link } from "react-router";
import { WebcamCapture } from "../components/WebcamCapture";
import { ArrowLeft, Camera } from "lucide-react";

export function LiveFeed() {
  const handleCapture = (imageData: string) => {
    console.log("Captured:", imageData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3lhbiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 py-8 max-w-6xl">
        {/* Header */}
        <header className="mb-8 border-b border-cyan-500/30 pb-6">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>

            <Camera className="w-10 h-10 text-cyan-400" />

            <div>
              <h1 className="text-cyan-400 uppercase tracking-wider">
                Live Feed
              </h1>
              <p className="text-gray-500 text-sm">Real-time camera stream</p>
            </div>
          </div>
        </header>

        {/* ONLY CAMERA */}
        <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-5">
            <Camera className="w-6 h-6 text-cyan-400" />
            <h2 className="text-cyan-400 uppercase tracking-wider">
              Camera Feed
            </h2>
          </div>

          <div className="rounded-lg overflow-hidden bg-black min-h-[700px] flex items-center justify-center">
            <WebcamCapture onCapture={handleCapture} isActive={true} />
          </div>
        </div>

        <footer className="mt-8 pt-6 border-t border-cyan-500/30 text-center text-gray-600 text-xs">
          <p>Camera monitoring active</p>
        </footer>
      </div>
    </div>
  );
}
