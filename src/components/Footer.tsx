import { Typography } from 'antd';
import { 
  TwitterOutlined, 
  FacebookOutlined, 
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined
} from '@ant-design/icons';

const { Paragraph } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-iron-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Vote Samuel for Guild President
          </h3>
          
          <Paragraph className="!text-gray-300 !text-lg mb-8">
            Together, we can build a better CMU Africa for everyone.
          </Paragraph>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="#" 
              className="text-gray-300 hover:text-gold-thread transition-colors text-2xl"
              aria-label="Twitter"
            >
              <TwitterOutlined />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-gold-thread transition-colors text-2xl"
              aria-label="Facebook"
            >
              <FacebookOutlined />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-gold-thread transition-colors text-2xl"
              aria-label="Instagram"
            >
              <InstagramOutlined />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-gold-thread transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <LinkedinOutlined />
            </a>
            <a 
              href="mailto:contact@votesam.yinyangr.com" 
              className="text-gray-300 hover:text-gold-thread transition-colors text-2xl"
              aria-label="Email"
            >
              <MailOutlined />
            </a>
          </div>
          
          <div className="border-t border-steel-gray pt-8">
            <Paragraph className="!text-gray-300 mb-2">
              &copy; {currentYear} Sam for Guild President. All rights reserved.
            </Paragraph>
            <Paragraph className="!text-gray-300 !text-sm">
              Hosted on votesam.yinyangr.com | Paid for by Students Supporting Sam
            </Paragraph>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
