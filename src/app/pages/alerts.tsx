import { Link } from "react-router";
import {
  ArrowLeft,
  Skull,
  AlertTriangle,
  Clock,
  MapPin,
  User,
} from "lucide-react";

const mockAlerts = [
  {
    id: 1,
    timestamp: "2026-04-18 13:24:15",
    level: "high",
    type: "UNAUTHORIZED ACCESS",
    location: "Sector 7-A",
    description: "Subject detected approaching restricted perimeter",
    status: "investigating",
  },
  {
    id: 2,
    timestamp: "2026-04-18 12:15:42",
    level: "medium",
    type: "SUSPICIOUS BEHAVIOR",
    location: "Main Entrance",
    description: "Counter-surveillance activity detected",
    status: "resolved",
  },
  {
    id: 3,
    timestamp: "2026-04-18 11:03:28",
    level: "low",
    type: "ROUTINE SCAN",
    location: "Camera 3",
    description: "Standard perimeter check completed",
    status: "cleared",
  },
  {
    id: 4,
    timestamp: "2026-04-18 09:47:11",
    level: "critical",
    type: "BREACH ATTEMPT",
    location: "Sector 2-B",
    description: "Multiple subjects attempting to bypass security",
    status: "neutralized",
  },
  {
    id: 5,
    timestamp: "2026-04-18 08:22:05",
    level: "medium",
    type: "UNKNOWN VEHICLE",
    location: "Parking Zone",
    description: "Unregistered vehicle in restricted area",
    status: "resolved",
  },
];

export function Alerts() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "critical":
        return "border-red-500 bg-red-600/20 text-red-400";
      case "high":
        return "border-orange-500 bg-orange-600/20 text-orange-400";
      case "medium":
        return "border-yellow-500 bg-yellow-600/20 text-yellow-400";
      case "low":
        return "border-green-500 bg-green-600/20 text-green-400";
      default:
        return "border-gray-500 bg-gray-600/20 text-gray-400";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "investigating":
        return "text-yellow-400";
      case "resolved":
        return "text-green-400";
      case "cleared":
        return "text-cyan-400";
      case "neutralized":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3lhbiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 py-8 max-w-6xl">
        <header className="mb-8 border-b border-cyan-500/30 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <Skull className="w-10 h-10 text-cyan-400" />
              <div>
                <h1 className="text-cyan-400 uppercase tracking-wider">
                  Threat Alerts
                </h1>
                <p className="text-gray-500 text-sm">
                  Security Event Monitoring & Response
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-black/40 border border-red-500/30 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-400 uppercase tracking-wider text-xs mb-1">
                  Critical
                </p>
                <p className="text-2xl text-red-400">1</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-400/50" />
            </div>
          </div>

          <div className="bg-black/40 border border-orange-500/30 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-400 uppercase tracking-wider text-xs mb-1">
                  High
                </p>
                <p className="text-2xl text-orange-400">1</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-400/50" />
            </div>
          </div>

          <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-400 uppercase tracking-wider text-xs mb-1">
                  Medium
                </p>
                <p className="text-2xl text-yellow-400">2</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-400/50" />
            </div>
          </div>

          <div className="bg-black/40 border border-green-500/30 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-400 uppercase tracking-wider text-xs mb-1">
                  Low
                </p>
                <p className="text-2xl text-green-400">1</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-green-400/50" />
            </div>
          </div>
        </div>

        <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
          <h2 className="text-cyan-400 uppercase tracking-wider mb-6">
            Recent Alerts
          </h2>

          <div className="space-y-4">
            {mockAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border-2 ${getLevelColor(alert.level)}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <h3 className="uppercase tracking-wider mb-1">
                        {alert.type}
                      </h3>
                      <p className="text-xs text-gray-400 font-mono">
                        {alert.timestamp}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs uppercase tracking-wider ${getStatusColor(alert.status)}`}
                  >
                    {alert.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-3 text-sm">
                  {alert.description}
                </p>

                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                    <span>{alert.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Priority: {alert.level.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            ))}
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
