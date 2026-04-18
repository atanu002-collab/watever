import { useState, useEffect } from 'react';
import { WebcamCapture } from './components/WebcamCapture';
import { ThreatProfile } from './components/ThreatProfile';
import { ControlPanel } from './components/ControlPanel';
import { Skull } from 'lucide-react';

// Mock AI threat profile generation
const generateThreatProfile = (): string => {
  const profiles = [
    `CLASSIFICATION: UNKNOWN SUBJECT
HEIGHT: 5'9" - 6'1" (estimated)
BUILD: Average
BEHAVIORAL INDICATORS:
- Approached surveillance perimeter at ${new Date().toLocaleTimeString()}
- Gait analysis: Confident, purposeful stride
- Facial expression: Neutral, non-threatening
- Environmental awareness: Moderate

THREAT ASSESSMENT: LOW
Subject appears to be civilian with no hostile intent.
Recommend continued monitoring.`,

    `CLASSIFICATION: POTENTIAL PERSON OF INTEREST
CONFIDENCE: 78%
LAST KNOWN LOCATION: Current position
TIME: ${new Date().toLocaleTimeString()}
BEHAVIORAL ANALYSIS:
- Unusual approach pattern detected
- Scanning surroundings (counter-surveillance behavior)
- Equipment detected: Unknown device in hand
- Previous database matches: 0

THREAT ASSESSMENT: MEDIUM
Elevated caution advised. Continue observation.`,

    `CLASSIFICATION: HIGH-VALUE TARGET
ALERT LEVEL: ELEVATED
DETECTION TIME: ${new Date().toLocaleTimeString()}
ADVANCED METRICS:
- Aggressive posture detected
- Rapid approach vector
- Possible concealed items
- Thermal signature: Elevated stress indicators
- Voice stress analysis: N/A (no audio)

THREAT ASSESSMENT: HIGH
Immediate response protocol initiated.
All units notified.`
  ];

  return profiles[Math.floor(Math.random() * profiles.length)];
};

// Mock ElevenLabs text-to-speech
const mockTextToSpeech = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 0.8;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
};

export default function App() {
  const [isArmed, setIsArmed] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [threatProfile, setThreatProfile] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [threatLevel, setThreatLevel] = useState<'low' | 'medium' | 'high' | 'critical'>('low');
  const [isSurveilling, setIsSurveilling] = useState(false);

  const handleCapture = (imageData: string) => {
    setCapturedImage(imageData);
    setIsAnalyzing(true);
    setIsSurveilling(false);

    setTimeout(() => {
      const profile = generateThreatProfile();
      setThreatProfile(profile);
      setIsAnalyzing(false);

      const levels: Array<'low' | 'medium' | 'high' | 'critical'> = ['low', 'medium', 'high'];
      setThreatLevel(levels[Math.floor(Math.random() * levels.length)]);

      const briefing = `Surveillance alert. Target acquired. ${profile.replace(/\n/g, '. ')}`;
      mockTextToSpeech(briefing);
    }, 2000);
  };

  const handleManualTrigger = () => {
    if (isArmed) {
      setIsSurveilling(true);
    }
  };

  const handleToggleArmed = () => {
    setIsArmed(!isArmed);
    if (!isArmed) {
      mockTextToSpeech('Surveillance system armed. Monitoring active.');
    } else {
      mockTextToSpeech('System disarmed.');
    }
  };

  useEffect(() => {
    if (isArmed) {
      const motionInterval = setInterval(() => {
        if (Math.random() > 0.95) {
          setIsSurveilling(true);
          setTimeout(() => setIsSurveilling(false), 1000);
        }
      }, 3000);

      return () => clearInterval(motionInterval);
    }
  }, [isArmed]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3lhbiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        <header className="mb-8 border-b border-cyan-500/30 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skull className="w-10 h-10 text-cyan-400" />
              <div>
                <h1 className="text-cyan-400 uppercase tracking-wider">Project Argus</h1>
                <p className="text-gray-500 text-sm">Advanced Surveillance Intelligence System</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-cyan-400 font-mono">{new Date().toLocaleDateString()}</div>
              <div className="text-gray-500 text-sm font-mono">{new Date().toLocaleTimeString()}</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-cyan-400 uppercase tracking-wider mb-4">Live Feed</h2>
              <WebcamCapture onCapture={handleCapture} isActive={isSurveilling} />
            </div>

            <ControlPanel
              isArmed={isArmed}
              onToggleArmed={handleToggleArmed}
              onManualTrigger={handleManualTrigger}
              threatLevel={threatLevel}
            />
          </div>

          <div className="space-y-6">
            <ThreatProfile
              imageData={capturedImage}
              profile={threatProfile}
              isAnalyzing={isAnalyzing}
            />

            <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-cyan-400 uppercase tracking-wider mb-4">System Log</h3>
              <div className="space-y-2 font-mono text-xs">
                <div className="text-green-400">[{new Date().toLocaleTimeString()}] System initialized</div>
                <div className="text-yellow-400">[{new Date().toLocaleTimeString()}] Webcam connected</div>
                {isArmed && <div className="text-red-400">[{new Date().toLocaleTimeString()}] Surveillance active</div>}
                {capturedImage && <div className="text-cyan-400">[{new Date().toLocaleTimeString()}] Target captured and analyzed</div>}
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
