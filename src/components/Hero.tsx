import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto relative">
          {/* Campaign Image with Overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/vote-sam-flyer-1.jpg" 
              alt="Vote Sam for Guild President" 
              className="w-full"
            />
            
            {/* Text and Buttons Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10 text-center">
              <Title level={1} className="!text-white !text-3xl md:!text-5xl lg:!text-6xl font-bold mb-4">
                Vote Sammuel Chukwuma for Guild President
              </Title>
              
              <Paragraph className="!text-white !text-lg md:!text-xl mb-6 opacity-90">
                Leadership. Vision. Action. Building a better CMU Africa together.
              </Paragraph>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="#manifesto" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  Read the Manifesto
                </a>
                <a 
                  href="#why-sam" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
                >
                  Why Vote Sam?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
