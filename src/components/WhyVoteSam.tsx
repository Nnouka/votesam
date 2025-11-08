import { Card, Typography } from 'antd';
import { 
  CheckCircleOutlined,
  TrophyOutlined,
  UsergroupAddOutlined,
  RiseOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface Qualification {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const qualifications: Qualification[] = [
  {
    icon: <TrophyOutlined className="text-5xl text-gold-thread" />,
    title: "Proven Leadership",
    description: "Successfully led multiple student initiatives and organizations, demonstrating strong organizational and people management skills."
  },
  {
    icon: <UsergroupAddOutlined className="text-5xl text-weaver-blue" />,
    title: "Community Builder",
    description: "Active in fostering connections across different student groups, creating an inclusive and collaborative campus environment."
  },
  {
    icon: <CheckCircleOutlined className="text-5xl text-green-thread" />,
    title: "Track Record of Results",
    description: "Delivered tangible outcomes in previous roles, from organizing successful events to implementing student feedback systems."
  },
  {
    icon: <RiseOutlined className="text-5xl text-highlands-blue" />,
    title: "Visionary Thinker",
    description: "Forward-thinking approach to student governance, with innovative ideas to modernize guild operations and services."
  }
];

const WhyVoteSam = () => {
  return (
    <section id="why-sam" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Title level={2} className="!text-4xl md:!text-5xl font-bold mb-4">
            Why Vote Sam?
          </Title>
          <Paragraph className="!text-xl text-gray-600 max-w-3xl mx-auto">
            Experience, dedication, and a genuine commitment to making CMU Africa the best it can be for every student.
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {qualifications.map((qual, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-l-4 border-carnegie-red"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{qual.icon}</div>
                <div>
                  <Title level={4} className="!text-xl mb-2">
                    {qual.title}
                  </Title>
                  <Paragraph className="text-gray-600 mb-0">
                    {qual.description}
                  </Paragraph>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-carnegie-red to-blue-thread rounded-2xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto">
          <Title level={3} className="!text-white !text-3xl mb-4">
            Ready to Make a Difference Together?
          </Title>
          <Paragraph className="!text-white !text-lg mb-6 opacity-90">
            Your vote is your voice. Let's build a stronger, more vibrant CMU Africa community together.
          </Paragraph>
          <blockquote className="text-xl italic border-l-4 border-gold-thread pl-4 mt-8">
            "Leadership is not about being in charge. It's about taking care of those in your charge."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhyVoteSam;
