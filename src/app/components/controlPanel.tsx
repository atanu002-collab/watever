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