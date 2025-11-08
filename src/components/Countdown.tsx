import { useEffect, useState } from 'react';
import { Typography } from 'antd';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const { Title, Paragraph } = Typography;

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Move votingDay outside component to prevent recreation on every render
const VOTING_DAY = dayjs('2025-11-14T00:00:00');

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = dayjs();
      const diff = VOTING_DAY.diff(now);
      
      if (diff > 0) {
        const dur = dayjs.duration(diff);
        setTimeLeft({
          days: Math.floor(dur.asDays()),
          hours: dur.hours(),
          minutes: dur.minutes(),
          seconds: dur.seconds()
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []); // Empty dependency array since VOTING_DAY is a constant

  return (
    <section className="min-h-screen py-12 md:py-16 text-white relative overflow-hidden flex items-center wave-bottom">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img 
          src="/vote-sam-flyer-1.jpg" 
          alt="Vote Sam Campaign" 
          className="w-full h-full object-cover object-top"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Attention-Grabbing Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block bg-gold-thread text-weaver-blue px-6 py-2 rounded-full font-bold text-sm md:text-base mb-6 animate-pulse shadow-lg">
            ⚡ VOTING DAY: NOVEMBER 14th, 2025 ⚡
          </div>
          <Title level={1} className="!text-white !text-4xl md:!text-6xl lg:!text-7xl font-extrabold mb-4 drop-shadow-2xl">
            Vote Sam for Guild President
          </Title>
          <Paragraph className="!text-white !text-xl md:!text-2xl mb-6 opacity-90 font-semibold drop-shadow-lg">
            Leadership. Vision. Action. Building a better CMU Africa together.
          </Paragraph>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Countdown Display */}
          <div className="bg-carnegie-red/30 backdrop-blur-lg border-2 border-gold-thread rounded-2xl p-6 md:p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center bg-white/10 rounded-xl p-4 md:p-6 hover:bg-white/20 transition-colors">
                <div className="text-gold-thread text-6xl md:text-7xl font-extrabold mb-2 animate-pulse">
                  {timeLeft.days}
                </div>
                <div className="text-white text-lg md:text-xl font-bold uppercase tracking-wider">Days</div>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-4 md:p-6 hover:bg-white/20 transition-colors">
                <div className="text-gold-thread text-6xl md:text-7xl font-extrabold mb-2 animate-pulse">
                  {timeLeft.hours}
                </div>
                <div className="text-white text-lg md:text-xl font-bold uppercase tracking-wider">Hours</div>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-4 md:p-6 hover:bg-white/20 transition-colors">
                <div className="text-gold-thread text-6xl md:text-7xl font-extrabold mb-2 animate-pulse">
                  {timeLeft.minutes}
                </div>
                <div className="text-white text-lg md:text-xl font-bold uppercase tracking-wider">Minutes</div>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-4 md:p-6 hover:bg-white/20 transition-colors">
                <div className="text-gold-thread text-6xl md:text-7xl font-extrabold mb-2 animate-pulse">
                  {timeLeft.seconds}
                </div>
                <div className="text-white text-lg md:text-xl font-bold uppercase tracking-wider">Seconds</div>
              </div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <a 
              href="#manifesto" 
              className="bg-carnegie-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-skibo-red transition-all transform hover:scale-105 shadow-xl"
            >
              Read the Manifesto
            </a>
            <a 
              href="#why-sam" 
              className="bg-transparent border-2 border-gold-thread text-gold-thread px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-thread hover:text-weaver-blue transition-all transform hover:scale-105 shadow-xl"
            >
              Why Vote Sam?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
