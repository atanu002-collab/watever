import { AlertTriangle, Skull, ShieldAlert, Camera, Radio } from "lucide-react";

export function Unauthorized() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-950 text-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmVkIiBzdHJva2Utb3BhY2l0eT0iMC4zIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        <header className="mb-8 border-b border-red-500 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skull className="w-12 h-12 text-red-500" />
              <div>
                <h1 className="text-red-500 uppercase tracking-wider">
                  ⚠️ SECURITY BREACH ⚠️
                </h1>
                <p className="text-red-400 text-sm">
                  UNAUTHORIZED ACCESS DETECTED
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-red-500 font-mono">
                ALERT LEVEL: CRITICAL
              </div>
              <div className="text-red-400 text-sm font-mono">
                {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <div className="bg-black/60 border-4 border-red-500 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-4 mb-6">
              <ShieldAlert className="w-24 h-24 text-red-500" />
            </div>
            <h2 className="text-center text-red-500 uppercase tracking-wider text-3xl mb-4">
              ACCESS DENIED
            </h2>
            <p className="text-center text-red-400 text-xl mb-6">
              UNAUTHORIZED PERSONNEL DETECTED
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/60 border-2 border-red-500 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <Camera className="w-6 h-6 text-red-500" />
                <h3 className="text-red-500 uppercase tracking-wider">
                  Visual Recording
                </h3>
              </div>
              <p className="text-red-400 text-sm">
                All cameras active. Facial recognition in progress.
              </p>
            </div>

            <div className="bg-black/60 border-2 border-red-500 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <Radio className="w-6 h-6 text-red-500" />
                <h3 className="text-red-500 uppercase tracking-wider">
                  Alert Transmitted
                </h3>
              </div>
              <p className="text-red-400 text-sm">
                Security teams have been notified. ETA: 2 minutes.
              </p>
            </div>

            <div className="bg-black/60 border-2 border-red-500 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="text-red-500 uppercase tracking-wider">
                  Lockdown Active
                </h3>
              </div>
              <p className="text-red-400 text-sm">
                All exits sealed. Authorities en route.
              </p>
            </div>
          </div>

          <div className="bg-black/60 border-2 border-red-500 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-red-500 uppercase tracking-wider mb-4">
              ⚠️ WARNING ⚠️
            </h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="text-red-400">
                [{new Date().toLocaleTimeString()}] UNAUTHORIZED ACCESS ATTEMPT
                DETECTED
              </div>
              <div className="text-red-400">
                [{new Date().toLocaleTimeString()}] SECURITY PROTOCOL ALPHA-7
                INITIATED
              </div>
              <div className="text-red-400">
                [{new Date().toLocaleTimeString()}] ALL SURVEILLANCE SYSTEMS
                ACTIVATED
              </div>
              <div className="text-red-400">
                [{new Date().toLocaleTimeString()}] BIOMETRIC DATA BEING
                RECORDED
              </div>
              <div className="text-red-400">
                [{new Date().toLocaleTimeString()}] LAW ENFORCEMENT NOTIFIED
              </div>
              <div className="text-red-400">
                [{new Date().toLocaleTimeString()}] PERIMETER LOCKDOWN ENGAGED
              </div>
              <div className="text-red-400">
                [{new Date().toLocaleTimeString()}] INTRUDER LOCATION: TRACKED
              </div>
            </div>
          </div>

          <div className="bg-red-950/80 border-4 border-red-500 rounded-lg p-8 backdrop-blur-sm text-center">
            <p className="text-red-500 uppercase tracking-wider text-xl mb-4">
              🚨 YOU ARE BEING MONITORED 🚨
            </p>
            <p className="text-red-400 text-sm">
              This incident has been logged and reported to the appropriate
              authorities.
              <br />
              Your IP address, device information, and biometric data have been
              recorded.
              <br />
              Unauthorized access to classified systems is a federal crime.
            </p>
          </div>
        </div>

        <footer className="mt-8 pt-6 border-t border-red-500 text-center">
          <p className="text-red-500 uppercase tracking-wider">
            ⚠️ CRITICAL SECURITY VIOLATION ⚠️
          </p>
          <p className="text-red-400 text-xs mt-2">
            USC Title 18 § 1030 - Unauthorized Access to Protected Systems
          </p>
        </footer>
      </div>
    </div>
  );
}
