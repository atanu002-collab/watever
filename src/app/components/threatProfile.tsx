interface ThreatProfileProps {
  imageData: string | null;
  profile: string | null;
  isAnalyzing: boolean;
}

export function ThreatProfile({ imageData, profile, isAnalyzing }: ThreatProfileProps) {
  if (!imageData) {
    return (
      <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
        <div className="text-center text-cyan-400/50">
          <p className="text-sm uppercase tracking-wider">No Target Detected</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <img
            src={imageData}
            alt="Target"
            className="w-48 h-48 object-cover rounded-lg border-2 border-cyan-500/50"
          />
          <div className="mt-2 text-center">
            <span className="text-xs text-cyan-400 uppercase tracking-wider">Target Acquired</span>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-cyan-400 uppercase tracking-wider">Threat Assessment</h3>
            {isAnalyzing && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-cyan-400 text-xs">Analyzing...</span>
              </div>
            )}
          </div>

          {profile ? (
            <div className="space-y-2">
              <div className="bg-black/60 p-4 rounded border border-cyan-500/20">
                <pre className="text-green-400 text-sm whitespace-pre-wrap font-mono">
                  {profile}
                </pre>
              </div>
            </div>
          ) : (
            <div className="text-cyan-400/50 text-sm">
              Generating threat profile...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { Camera, Mic, Shield, AlertTriangle } from 'lucide-react';

interface ControlPanelProps {
  isArmed: boolean;
  onToggleArmed: () => void;
  onManualTrigger: () => void;
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
}

export function ControlPanel({ isArmed, onToggleArmed, onManualTrigger, threatLevel }: ControlPanelProps) {
  const threatColors = {
    low: 'text-green-400 border-green-400/50',
    medium: 'text-yellow-400 border-yellow-400/50',
    high: 'text-orange-400 border-orange-400/50',
    critical: 'text-red-400 border-red-400/50'
  };

  return (
    <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={onToggleArmed}
          className={`p-6 rounded-lg border-2 transition-all ${
            isArmed
              ? 'bg-red-600/20 border-red-500 text-red-400'
              : 'bg-gray-800/20 border-gray-600 text-gray-400'
          }`}
        >
          <Shield className="w-8 h-8 mx-auto mb-2" />
          <div className="text-xs uppercase tracking-wider">
            {isArmed ? 'System Armed' : 'System Standby'}
          </div>
        </button>

        <button
          onClick={onManualTrigger}
          disabled={!isArmed}
          className="p-6 rounded-lg border-2 bg-cyan-600/20 border-cyan-500 text-cyan-400 hover:bg-cyan-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Camera className="w-8 h-8 mx-auto mb-2" />
          <div className="text-xs uppercase tracking-wider">Manual Capture</div>
        </button>

        <div className={`p-6 rounded-lg border-2 ${threatColors[threatLevel]}`}>
          <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
          <div className="text-xs uppercase tracking-wider">
            Threat: {threatLevel}
          </div>
        </div>

        <div className="p-6 rounded-lg border-2 bg-purple-600/20 border-purple-500 text-purple-400">
          <Mic className="w-8 h-8 mx-auto mb-2" />
          <div className="text-xs uppercase tracking-wider">Audio Briefing</div>
        </div>
      </div>
    </div>
  );
}