import { Card, Typography } from 'antd';
import { 
  TeamOutlined, 
  BookOutlined, 
  HomeOutlined, 
  ThunderboltOutlined,
  HeartOutlined,
  SafetyOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface ManifestoItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const manifestoItems: ManifestoItem[] = [
  {
    icon: <TeamOutlined className="text-4xl text-scots-rose" />,
    title: "Student Welfare & Community",
    description: "Enhance student support services, mental health resources, and create a more inclusive campus environment where every voice is heard."
  },
  {
    icon: <BookOutlined className="text-4xl text-blue-thread" />,
    title: "Academic Excellence",
    description: "Advocate for better learning resources, expanded library hours, and improved communication between students and faculty."
  },
  {
    icon: <HomeOutlined className="text-4xl text-weaver-blue" />,
    title: "Campus Infrastructure",
    description: "Push for better facilities, improved Wi-Fi connectivity, and comfortable study spaces that meet modern learning needs."
  },
  {
    icon: <ThunderboltOutlined className="text-4xl text-gold-thread" />,
    title: "Innovation & Technology",
    description: "Promote tech initiatives, hackathons, and partnerships with industry leaders to prepare students for the digital economy."
  },
  {
    icon: <HeartOutlined className="text-4xl text-carnegie-red" />,
    title: "Social Events & Culture",
    description: "Organize diverse cultural events, sports activities, and networking opportunities that celebrate our vibrant community."
  },
  {
    icon: <SafetyOutlined className="text-4xl text-green-thread" />,
    title: "Transparency & Accountability",
    description: "Ensure transparent communication of guild activities, budgets, and decisions with regular updates to all students."
  }
];

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Title level={2} className="!text-4xl md:!text-5xl font-bold mb-4">
            My Manifesto
          </Title>
          <Paragraph className="!text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive plan to transform our student experience and create lasting positive change at CMU Africa.
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {manifestoItems.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-carnegie-red"
              hoverable
            >
              <div className="text-center">
                <div className="mb-4">{item.icon}</div>
                <Title level={4} className="!text-xl mb-3">
                  {item.title}
                </Title>
                <Paragraph className="text-gray-600">
                  {item.description}
                </Paragraph>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
