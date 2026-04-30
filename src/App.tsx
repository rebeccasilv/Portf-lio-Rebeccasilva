import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  Code2,
  Database,
  Cloud,
  Layers,
  Menu,
  X,
  Languages,
  Github,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Monitor,
  Cpu,
  ShieldCheck,
  Smartphone,
  Globe,
  Ghost,
  MessageCircle
} from 'lucide-react';

type Language = 'en' | 'pt';

interface Content {
  nav: { about: string; projects: string; skills: string; contact: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    experience: string;
    experienceText: string;
  };
  about: {
    label: string;
    title: string;
    subtitle: string;
    text: string;
  };
  skills: {
    title: string;
    description: string;
    skillNames: string[];
    softSkills: string[];
  };
  projects: {
    title: string;
    description: string;
    viewArchive: string;
    considerationsLabel: string;
    inDevelopment: string;
    portfolio: string;
  };
  footer: {
    rights: string;
  }
}

const translations: Record<Language, Content> = {
  en: {
    nav: { about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    hero: {
      badge: 'Available for new projects',
      title: 'Rebecca Silva',
      subtitle: 'Full-Stack Developer',
      description: 'Full-Stack Developer passionate about transforming ideas into real solutions, combining a technical foundation, constant learning, and creativity in developing modern digital experiences. I am always exploring new technologies, automations, and ways to make systems more intuitive, efficient, and useful for people.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Download CV',
      experience: '2+ Years',
      experienceText: 'Freelance Exp'
    },
    about: {
      label: 'The Developer',
      title: 'Synthesizing Creativity and Logic',
      subtitle: 'About Me',
      text: 'I am a Full-Stack developer and Computer Science student, with experience in real projects developed for clients and platforms in production. I enjoy working on solutions that go beyond visuals, also considering usability, automation, performance, and user experience.\n\nI believe technology exists to make processes simpler, more accessible, and more efficient. Therefore, I am interested not only in developing functional systems but in building projects that truly make sense for those who use them.\n\nI have a proactive profile and love constant learning. I am always studying new technologies, following industry trends, and seeking ways to evolve both technically and in how I think about modern and intelligent solutions. Most of the projects I develop involve real challenges, which has taught me to combine creativity, logic, and adaptation during development.\n\nI especially enjoy projects involving automation, web platforms, digital monetization, system integrations, and interactive experiences, as these are areas where I can apply both my technical skills and my creativity in development.'
    },
    skills: {
      title: 'Technical Ecosystem',
      description: 'A collection of tools and technologies I use to build real, scalable, user-focused applications.',
      skillNames: [
        'Full-Stack Development', 'PHP & WordPress', 'Databases (MySQL, Supabase)',
        'UI/UX & Web Perf', 'Monetization (AdSense)', 'CI/CD & AI Tools',
        'Tailwind CSS', 'TypeScript', 'Node.js', 'Vibe Coding', 'Clean Code'
      ],
      softSkills: ["Problem Solving", "Communication", "Fast Learning", "Adaptability", "Teamwork", "Organization"]
    },
    projects: {
      title: 'Featured Works',
      description: 'Real freelance projects used by real people — from small corrections to complete platforms.',
      viewArchive: 'View Archive',
      considerationsLabel: 'Considerations',
      inDevelopment: 'In Dev',
      portfolio: 'Portfolio'
    },
    footer: {
      rights: '© 2026 Rebecca Silva. All rights reserved.'
    }
  },
  pt: {
    nav: { about: 'Sobre', projects: 'Projetos', skills: 'Skills', contact: 'Contato' },
    hero: {
      badge: 'Disponível para novos projetos',
      title: 'Rebecca Silva',
      subtitle: 'Desenvolvedora Full-Stack',
      description: 'Desenvolvedora Full-Stack apaixonada por transformar ideias em soluções reais, unindo base técnica, aprendizado constante e criatividade no desenvolvimento de experiências digitais modernas. Estou sempre explorando novas tecnologias, automações e formas de tornar sistemas mais intuitivos, eficientes e úteis para as pessoas.',
      ctaPrimary: 'Ver Projetos',
      ctaSecondary: 'Baixar CV',
      experience: '2+ Anos',
      experienceText: 'Exp Freelancer'
    },
    about: {
      label: 'A Desenvolvedora',
      title: 'Sintetizando Criatividade e Lógica',
      subtitle: 'Sobre mim',
      text: 'Sou desenvolvedora Full-Stack e estudante de Ciência da Computação, com experiência em projetos reais desenvolvidos para clientes e plataformas em produção. Gosto de trabalhar criando soluções que vão além do visual, pensando também em usabilidade, automação, performance e experiência do usuário.\n\nAcredito que a tecnologia existe para tornar processos mais simples, acessíveis e eficientes. Por isso, tenho interesse não apenas em desenvolver sistemas funcionais, mas em construir projetos que realmente façam sentido para quem utiliza.\n\nTenho um perfil proativo e gosto de aprender constantemente. Estou sempre estudando novas tecnologias, acompanhando tendências da área e buscando maneiras de evoluir tanto tecnicamente quanto na forma de pensar soluções mais modernas e inteligentes. Grande parte dos projetos que desenvolvo envolve desafios reais, o que me fez aprender a unir criatividade, lógica e adaptação durante o desenvolvimento.\n\nGosto especialmente de projetos que envolvem automação, plataformas web, monetização digital, integrações entre sistemas e experiências interativas, porque são áreas onde consigo aplicar tanto minha parte técnica quanto minha criatividade no desenvolvimento.'
    },
    skills: {
      title: 'Ecossistema Técnico',
      description: 'Uma coleção de ferramentas e tecnologias que utilizo para criar aplicações reais, escaláveis e focadas no usuário.',
      skillNames: [
        'Desenvolvimento Full-Stack', 'PHP & WordPress', 'Bancos de Dados (MySQL, Supabase)',
        'UI/UX & Performance Web', 'Monetização (AdSense)', 'Ferramentas de CI/CD & IA',
        'Tailwind CSS', 'TypeScript', 'Node.js', 'Vibe Coding', 'Clean Code'
      ],
      softSkills: ["Resolução de Problemas", "Comunicação", "Aprendizado Rápido", "Adaptabilidade", "Trabalho em Equipe", "Organização"]
    },
    projects: {
      title: 'Trabalhos Selecionados',
      description: 'Projetos freelancer reais, utilizados por pessoas reais — de pequenas correções a plataformas completas.',
      viewArchive: 'Ver Arquivo',
      considerationsLabel: 'Considerações',
      inDevelopment: 'Em Desenvolvimento',
      portfolio: 'Portfólio'
    },
    footer: {
      rights: '© 2026 Rebecca Silva. Todos os direitos reservados'
    }
  }
};

const skillList = [
  { icon: <Code2 className="w-7 h-7" /> },
  { icon: <Layers className="w-7 h-7" /> },
  { icon: <Database className="w-7 h-7" /> },
  { icon: <Monitor className="w-7 h-7" /> },
  { icon: <Globe className="w-7 h-7" /> },
  { icon: <Cpu className="w-7 h-7" /> },
  { icon: <Terminal className="w-7 h-7" /> },
  { icon: <Code2 className="w-7 h-7" /> },
  { icon: <Cloud className="w-7 h-7" /> },
  { icon: <Ghost className="w-7 h-7" /> },
  { icon: <ShieldCheck className="w-7 h-7" /> },
];


interface Project {
  title: string;
  titleEn?: string;
  description: string;
  longDescription: string;
  longDescriptionEn?: string;
  features?: string[];
  featuresEn?: string[];
  considerations?: string[];
  considerationsEn?: string[];
  tags: string[];
  images: string[];
  link: string;
}

const featuredProjects: Project[] = [
  {
    title: 'App de Relacionamento',
    titleEn: 'Dating App',
    description: 'Homepage moderna com foco em microinterações e UX.',
    longDescription: 'Projeto freelancer Full-Stack desenvolvido para a homepage de uma plataforma de relacionamento, com foco em responsividade, experiência do usuário e interações visuais modernas. O desenvolvimento incluiu estruturação completa da interface, microinterações em JavaScript, animações, simulação de mensagens e adaptação para diferentes dispositivos.',
    longDescriptionEn: 'Freelance Full-Stack project for the homepage of a dating platform, focused on responsiveness, UX and modern visual interactions. Included full interface structuring, JavaScript micro-interactions, animations, message simulation and multi-device adaptation.',
    features: [
      'Desenvolvimento Full-Stack da homepage',
      'Layout responsivo para desktop e mobile',
      'Simulação de mensagens e interações do aplicativo',
      'Microinterações e animações em JavaScript',
      'Estrutura visual focada em UX/UI',
      'Organização visual e otimização da navegação'
    ],
    featuresEn: [
      'Full-Stack development of the homepage',
      'Responsive layout for desktop and mobile',
      'Message and app interaction simulation',
      'Micro-interactions and animations in JavaScript',
      'UX/UI focused visual structure',
      'Visual organization and navigation optimization'
    ],
    considerations: [
      'Esse foi o primeiro projeto em que fui chamada para desenvolver o front-end completo de uma plataforma. Antes disso, eu trabalhava principalmente com pequenas correções e plugins de automação, então esse projeto marcou uma virada importante para mim profissionalmente.',
      'Foi também a primeira vez que alguém viu meu trabalho não apenas como algo funcional, mas como algo visualmente interessante e bem construído. A parte que mais gostei foi trabalhar com animações e interações em JavaScript, porque sempre tive interesse em interfaces mais dinâmicas e modernas. Mesmo seguindo a identidade visual definida pelo cliente, eu gostaria de ter tido ainda mais liberdade criativa para explorar animações e microinterações dentro da interface.'
    ],
    considerationsEn: [
      'This was the first project where I was called to develop the complete front-end of a platform. Before that, I worked mainly with small fixes and automation plugins, so this project marked an important professional turning point for me.',
      'It was also the first time someone saw my work not just as functional, but as visually interesting and well-built. What I enjoyed most was working with JavaScript animations and interactions, as I\'ve always been interested in more dynamic and modern interfaces. Even following the client\'s visual identity, I would have loved to have even more creative freedom to explore animations and micro-interactions within the interface.'
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    images: [
      'https://i.ibb.co/N2HvWVYY/image.png',
      'https://i.ibb.co/QjfSYNnh/image.png'
    ],
    link: 'https://bit.ly/4ri1Pb9'
  },
  {
    title: 'Receitas Culinárias',
    titleEn: 'Culinary Recipes',
    description: 'Blog focado em organização de conteúdo e monetização digital.',
    longDescription: 'Blog de receitas desenvolvido com foco em organização de conteúdo, monetização digital e experiência do usuário. O projeto foi otimizado para Google AdSense, SEO e retenção de usuários, além de contar com estilização moderna e animações desenvolvidas com Tailwind CSS.',
    longDescriptionEn: 'Recipe blog built for content organization, digital monetization and user experience. Optimized for Google AdSense, SEO and user retention, featuring modern styling and animations developed with Tailwind CSS.',
    features: [
      'Estrutura completa do blog de receitas',
      'Organização de categorias e conteúdos',
      'Sistema otimizado para Google AdSense',
      'Layout responsivo e otimizado para SEO',
      'Animações e estilizações utilizando Tailwind CSS',
      'Estrutura focada em retenção e navegação intuitiva',
      'Otimização visual e performance do site'
    ],
    featuresEn: [
      'Complete recipe blog structure',
      'Category and content organization',
      'Google AdSense optimized system',
      'Responsive and SEO-optimized layout',
      'Animations and styling with Tailwind CSS',
      'Retention-focused structure and intuitive navigation',
      'Visual optimization and site performance'
    ],
    considerations: [
      'Esse projeto foi interessante porque envolveu não apenas o desenvolvimento visual do site, mas também toda a parte de monetização e otimização da plataforma. O cliente queria um site que fugisse do padrão visual comum de blogs de receitas, então consegui trabalhar bastante criatividade na construção da interface.',
      'Tenho bastante afinidade com Tailwind CSS, então aproveitei o projeto para explorar melhor animações, transições e detalhes visuais que deixassem o site mais agradável e moderno. Além da parte estética, gostei bastante de trabalhar pensando em retenção de usuários, organização de conteúdo e experiência de navegação, porque eram pontos importantes para o crescimento do projeto.'
    ],
    considerationsEn: [
      'This project was interesting because it involved not only the visual development of the site but also the entire monetization and optimization aspect of the platform. The client wanted a site that broke away from the common visual pattern of recipe blogs, so I was able to exercise a lot of creativity in building the interface.',
      'I have a great affinity for Tailwind CSS, so I used the project to better explore animations, transitions, and visual details to make the site more pleasant and modern. Beyond aesthetics, I really enjoyed working on user retention, content organization, and navigation experience, as these were crucial points for the project\'s growth.'
    ],
    tags: ['WordPress', 'Tailwind CSS', 'Elementor', 'Google AdSense', 'CSS', 'SEO Optimization'],
    images: [
      'https://i.ibb.co/0jK9fZqd/image.png',
      'https://i.ibb.co/j9t25BGY/image.png',
      'https://i.ibb.co/FbXQLXd5/image.png',
      'https://i.ibb.co/fYKWrCDZ/image.png'
    ],
    link: 'https://receitasculinarias.com.br/'
  },
  {
    title: 'Sintony',
    titleEn: 'Sintony',
    description: 'Plataforma institucional e posicionamento digital progressivo.',
    longDescription: 'Plataforma institucional desenvolvida inicialmente como site de relacionamento e posteriormente expandida para aplicativo. O projeto foi desenvolvido com foco em experiência do usuário, organização visual, responsividade e apresentação moderna da plataforma.',
    longDescriptionEn: 'Institutional platform initially developed as a dating website, later expanded into an app. Built with a focus on user experience, visual organization, responsiveness and modern platform presentation.',
    features: [
      'Desenvolvimento da interface da plataforma',
      'Estrutura institucional do site',
      'Layout responsivo para múltiplos dispositivos',
      'Integração de páginas e áreas informativas',
      'Organização visual focada em UX/UI',
      'Estrutura preparada para evolução da plataforma'
    ],
    featuresEn: [
      'Platform interface development',
      'Institutional site structure',
      'Responsive layout for multiple devices',
      'Page and informational area integration',
      'UX/UI focused visual organization',
      'Structure prepared for platform evolution'
    ],
    considerations: [
      'Gostei bastante de desenvolver o Sintony porque já era o segundo projeto envolvendo plataformas de relacionamento, então consegui trabalhar com mais experiência e segurança na parte visual e estrutural.',
      'Uma das coisas que mais me motivaram nesse projeto foi acompanhar a evolução dele de um site institucional para uma plataforma que posteriormente virou um aplicativo. Isso me fez enxergar o projeto de forma mais ampla, pensando não apenas no design, mas também na experiência do usuário e na construção de uma identidade mais moderna e confiável para a plataforma.'
    ],
    considerationsEn: [
      'I really enjoyed developing Sintony because it was already my second project involving dating platforms, so I was able to work with more experience and confidence in both the visual and structural aspects.',
      'One of the things that motivated me most was following its evolution from an institutional site to a platform that later became an app. This made me see the project more broadly, thinking not just about design but also about user experience and building a more modern and reliable identity for the platform.'
    ],
    tags: ['UX/UI', 'Responsive', 'Product Strategy'],
    images: [
      'https://i.ibb.co/tMVRPdQD/image.png',
      'https://i.ibb.co/4Z6PX230/image.png',
      'https://i.ibb.co/Y4HBcRrD/image.png',
      'https://i.ibb.co/Rkbfvq1c/image.png'
    ],
    link: 'https://sintony.com.br/'
  },
  {
    title: 'ByteX Media',
    titleEn: 'ByteX Media',
    description: 'Painel administrativo para gerenciamento de serviços e pagamentos.',
    longDescription: 'Sistema administrativo desenvolvido para gerenciamento de serviços, pagamentos, arquivos e comunicação entre clientes e plataforma. O painel foi estruturado para centralizar operações, facilitar processos internos e oferecer uma experiência organizada para os usuários.',
    longDescriptionEn: 'Admin system for managing services, payments, files and client-platform communication. The panel centralizes operations, streamlines internal processes and delivers an organized experience for users.',
    features: [
      'Sistema administrativo de gerenciamento',
      'Upload e gerenciamento de arquivos',
      'Sistema de pagamentos integrado',
      'Vinculação e gerenciamento de links',
      'Painel centralizado para contratação de serviços',
      'Interface administrativa organizada e responsiva',
      'Estrutura escalável para múltiplos usuários'
    ],
    featuresEn: [
      'Administrative management system',
      'File upload and management',
      'Integrated payment system',
      'Link binding and management',
      'Centralized panel for service contracting',
      'Organized and responsive admin interface',
      'Scalable structure for multiple users'
    ],
    considerations: [
      'Esse projeto foi importante para meu crescimento porque comecei a trabalhar mais diretamente com lógica de sistemas administrativos e organização de processos internos. Diferente dos projetos mais visuais, aqui precisei pensar bastante na estrutura do sistema, usabilidade e fluxo de informações dentro do painel.',
      'Gostei bastante da ideia do projeto porque ele permitia que clientes centralizassem tudo em um único lugar: contratação de serviços, pagamentos, upload de arquivos e gerenciamento de links. Isso me fez enxergar mais a importância de criar sistemas organizados, intuitivos e funcionais para o usuário final.'
    ],
    considerationsEn: [
      'This project was important for my growth because I began working more directly with admin system logic and internal process organization. Unlike more visual projects, here I had to think deeply about system structure, usability, and information flow within the panel.',
      'I really liked the project\'s concept because it allowed clients to centralize everything in one place: service hiring, payments, file uploads, and link management. This made me see more clearly the importance of creating organized, intuitive, and functional systems for the end-user.'
    ],
    tags: ['PHP', 'JavaScript', 'TypeScript', 'MySQL', 'PostgreSQL', 'Supabase'],
    images: [
      'https://i.ibb.co/Q3fck7Lf/image.png',
      'https://i.ibb.co/DHT58rwT/image.png',
      'https://i.ibb.co/cS8J07BM/image.png'
    ],
    link: 'https://bytexmedia.com/'
  },
  {
    title: 'UnityRede Partners',
    titleEn: 'UnityRede Partners',
    description: 'Plataforma de gestão para parceiros e terceirização de operações digitais.',
    longDescription: 'Plataforma desenvolvida para gerenciamento de parceiros e terceirização de operações digitais. O sistema permite que cada parceiro tenha sua própria estrutura administrativa, controle financeiro, acompanhamento de tráfego e gerenciamento independente dentro da plataforma.',
    longDescriptionEn: 'Platform for partner management and digital operations outsourcing. Each partner gets their own admin structure, financial control, traffic tracking and independent management within the platform.',
    features: [
      'Painel individual para parceiros',
      'Integração com APIs do WordPress',
      'Sistema automatizado de pagamentos',
      'Controle de faturamento e lucro',
      'Gestão de folha de pagamento',
      'Upload de comprovantes de pagamento',
      'Acompanhamento de tráfego e acessos',
      'Sistema automatizado de encurtamento de links',
      'Sistema de CAPTCHA e segurança',
      'Estrutura escalável para múltiplas operações'
    ],
    featuresEn: [
      'Individual partner dashboard',
      'WordPress API integration',
      'Automated payment system',
      'Revenue and profit control',
      'Payroll management',
      'Payment receipt upload',
      'Traffic and access tracking',
      'Automated link shortening system',
      'CAPTCHA and security system',
      'Scalable structure for multiple operations'
    ],
    considerations: [
      'Esse foi um dos projetos mais importantes da minha trajetória até agora, principalmente porque participei não apenas do desenvolvimento, mas também da construção da solução proposta ao cliente.',
      'O cliente queria terceirizar a operação da empresa de links, então sugeri a criação de um painel onde cada parceiro pudesse ter sua própria operação independente. Foi um projeto que gostei muito de desenvolver porque consegui trabalhar automações, integrações com APIs, cálculos financeiros, gerenciamento de tráfego e estruturação de sistemas mais complexos.',
      'Também foi um projeto que me trouxe bastante reconhecimento profissional, porque consegui participar diretamente da ideia, da arquitetura do sistema e da implementação das funcionalidades mais importantes da plataforma.'
    ],
    considerationsEn: [
      'This has been one of the most important projects of my career so far, mainly because I participated not only in the development but also in building the solution proposed to the client.',
      'The client wanted to outsource the operations of their link company, so I suggested creating a panel where each partner could have their own independent operation. It was a project I loved developing because I was able to work on automations, API integrations, financial calculations, traffic management, and structuring more complex systems.',
      'It also brought me significant professional recognition, as I was directly involved in the idea, system architecture, and implementation of the platform\'s most important features.'
    ],
    tags: ['PHP', 'JavaScript', 'TypeScript', 'APIs REST', 'WordPress API', 'MySQL', 'PostgreSQL', 'Supabase'],
    images: [
      'https://i.ibb.co/4ZrwvWSm/image.png',
      'https://i.ibb.co/DPvCZHph/image.png',
      'https://i.ibb.co/SXmSBgpM/image.png',
      'https://i.ibb.co/tWmZxhW/image.png',
      'https://i.ibb.co/3yZc0XYW/image.png'
    ],
    link: 'https://unitypartner.com.br/'
  }
];

const developmentProjects: Project[] = [
  {
    title: 'Encurtaki',
    titleEn: 'Encurtaki',
    description: 'Plataforma inteligente de monetização de links.',
    longDescription: 'Plataforma de monetização de links desenvolvida para permitir que usuários gerem receita através de tráfego em links encurtados. O projeto inclui automação de pagamentos, integração com WordPress, gerenciamento financeiro e análise inteligente de desempenho.',
    longDescriptionEn: 'Link monetization platform that allows users to generate revenue through traffic on shortened links. Includes automated payments, WordPress integration, financial management and intelligent performance analysis.',
    features: [
      'Sistema de monetização de links',
      'Sistema automatizado de pagamentos',
      'Upload de comprovantes',
      'Integração com WordPress',
      'Sistema inteligente de sugestão de horários',
      'Análise de desempenho baseada em histórico de cliques',
      'Encurtamento automatizado de links',
      'Funcionalidades voltadas para crescimento social',
      'Sistema de segurança e proteção de acessos'
    ],
    featuresEn: [
      'Link monetization system',
      'Automated payment system',
      'Receipt upload system',
      'WordPress integration',
      'Intelligent scheduling suggestion system',
      'Click history-based performance analysis',
      'Automated link shortening',
      'Social growth-focused features',
      'Security and access protection system'
    ],
    considerations: [
      'O Encurtaki é um projeto que estou gostando bastante de desenvolver porque ele mistura monetização, automação, análise de dados e experiência do usuário em uma única plataforma.',
      'Além das funcionalidades solicitadas pelo cliente, também estou propondo novas ideias para agregar mais valor ao sistema. Uma das funcionalidades que mais gostei de pensar foi o sistema inteligente de sugestão de horários para postagem de links, baseado no histórico de cliques dos usuários. A ideia é ajudar criadores e usuários da plataforma a entenderem quais horários geram melhor desempenho e mais receita.',
      'Também estou trabalhando em funcionalidades voltadas para crescimento social, como sistemas para aumentar seguidores, curtidas e inscritos. Gosto bastante desse tipo de projeto porque ele me permite unir desenvolvimento técnico com estratégias de crescimento digital e experiência do usuário.'
    ],
    considerationsEn: [
      'Encurtaki is a project I\'m really enjoying developing because it blends monetization, automation, data analysis, and user experience into a single platform.',
      'In addition to the features requested by the client, I\'m also proposing new ideas to add more value to the system. One of the features I enjoyed thinking about most was the intelligent scheduling suggestion system for link posting, based on user click history. The idea is to help creators and platform users understand which times generate the best performance and most revenue.',
      'I\'m also working on social growth features, such as systems to increase followers, likes, and subscribers. I really like this type of project because it allows me to combine technical development with digital growth strategies and user experience.'
    ],
    tags: ['PHP', 'JavaScript', 'TypeScript', 'APIs REST', 'WordPress API', 'MySQL', 'PostgreSQL', 'Supabase'],
    images: [
      'https://i.ibb.co/pB94mgjk/image.png',
      'https://i.ibb.co/fGvSBX9q/image.png',
      'https://i.ibb.co/7dmQBCW0/image.png',
      'https://i.ibb.co/JjnPdd52/image.png'
    ],
    link: '#'
  }
];

function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Slide ${current}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${current === i ? 'bg-primary w-4' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}


function TechParticles() {
  const codeSymbols = ['{ }', '<>', '/>', '[]', '()', '=>', ';;', '**', '##', '&&', '||', '!=', '01', '10', '</>', 'npm', 'git', 'css', 'tsx', 'jsx'];
  // Deterministic particles — no Math.random() to avoid hydration issues
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    symbol: codeSymbols[i % codeSymbols.length],
    size: 0.5 + (i % 5) * 0.25,
    x: (i * 2.1) % 100,
    y: (i * 3.7) % 100,
    duration: 18 + (i % 7) * 5,
    delay: -(i * 1.3),
    driftX: (i % 2 === 0 ? 1 : -1) * (10 + (i % 6) * 8),
    opacity: 0.25 + (i % 4) * 0.1,
  }));

  // Small floating dots
  const dots = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: (i * 3.33) % 100,
    y: (i * 5.71) % 100,
    duration: 10 + (i % 5) * 4,
    delay: -(i * 0.7),
    size: 2 + (i % 3) * 1.5,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ambient glow orbs — stronger */}
      <motion.div
        animate={{ x: [0, 100, -60, 0], y: [0, -100, 60, 0], scale: [1, 1.3, 0.9, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[5%] left-[10%] w-[35rem] h-[35rem] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.25) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -120, 70, 0], y: [0, 90, -70, 0], scale: [1, 1.4, 0.8, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[45%] right-[5%] w-[42rem] h-[42rem] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, -80, 100, 0], scale: [1, 1.2, 0.85, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[10%] left-[25%] w-[30rem] h-[30rem] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(192,38,211,0.18) 0%, transparent 70%)' }}
      />
      {/* Extra small orb top-right */}
      <motion.div
        animate={{ x: [0, -60, 40, 0], y: [0, 60, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] right-[25%] w-[18rem] h-[18rem] rounded-full blur-[80px]"
        style={{ background: 'radial-gradient(circle, rgba(216,180,254,0.15) 0%, transparent 70%)' }}
      />

      {/* Floating code symbols */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute font-mono font-bold select-none"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            fontSize: `${p.size}rem`,
            color: `rgba(168, 85, 247, ${p.opacity})`,
            textShadow: `0 0 12px rgba(147, 51, 234, ${p.opacity * 0.8}), 0 0 24px rgba(147, 51, 234, ${p.opacity * 0.4})`,
          }}
          animate={{
            y: [0, -140, 0],
            x: [0, p.driftX, 0],
            opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        >
          {p.symbol}
        </motion.span>
      ))}

      {/* Floating neon dots */}
      {dots.map((d) => (
        <motion.div
          key={`dot-${d.id}`}
          className="absolute rounded-full"
          style={{
            left: `${d.x}vw`,
            top: `${d.y}vh`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            background: 'rgba(168, 85, 247, 0.6)',
            boxShadow: '0 0 6px rgba(147, 51, 234, 0.8), 0 0 12px rgba(147, 51, 234, 0.4)',
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            delay: d.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Static horizontal scan lines (subtle matrix effect) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(147,51,234,0.012) 40px, rgba(147,51,234,0.012) 41px)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'featured' | 'dev'>('featured');
  const catalogRef = useRef<HTMLDivElement>(null);

  const scrollCatalog = (dir: 'left' | 'right') => {
    if (!catalogRef.current) return;
    const amount = 500;
    catalogRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'pt' : 'en');

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30 text-on-surface relative">
      <TechParticles />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-white/5 py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold tracking-tighter"
          >
            Rebecca Silva
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, label]) => (
              <a
                key={key}
                href={`#${key.charAt(0).toUpperCase() + key.slice(1)}`}
                className="text-on-surface-variant hover:text-primary transition-colors font-medium text-sm"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors px-3 py-1.5 glass-panel rounded-md"
            >
              <Languages size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">{lang.toUpperCase()}</span>
            </button>
            <button className="md:hidden text-on-surface p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface md:hidden pt-24 px-8"
          >
            <div className="flex flex-col gap-6">
              {Object.entries(t.nav).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key.charAt(0).toUpperCase() + key.slice(1)}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-display font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 hero-glow -z-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary text-[10px] font-bold uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight"
            >
              {t.hero.title} <br />
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                className="text-primary-container font-mono font-medium typewriter-text mt-4 text-2xl sm:text-3xl md:text-5xl inline-block"
              >
                {t.hero.subtitle}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed font-light"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#Projects" className="px-8 py-4 bg-primary text-on-primary font-bold rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all group">
                {t.hero.ctaPrimary} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://bit.ly/4defgFc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-panel text-white font-medium rounded-lg hover:bg-white/5 active:scale-[0.98] flex items-center justify-center"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 relative group"
          >
            <div className="aspect-square relative">
              {/* Rotating neon ring */}
              <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, rgba(147,51,234,0.8), rgba(216,180,254,0.3), rgba(147,51,234,0), rgba(147,51,234,0.8))', animation: 'spin 6s linear infinite', padding: '3px' }}>
                <div className="w-full h-full rounded-full bg-surface" />
              </div>
              {/* Static glow ring */}
              <div className="absolute inset-[3px] rounded-full shadow-[0_0_40px_rgba(147,51,234,0.4),inset_0_0_40px_rgba(147,51,234,0.1)]" />
              {/* Photo */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 blur-2xl" />
                <img
                  src="https://lh3.googleusercontent.com/d/1wyrUPgWZzRiiAU7sPl22qlNm1EmNsj3X"
                  alt="Rebecca Silva"
                  className="relative z-10 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Orbiting dot */}
              <div className="absolute inset-0 rounded-full" style={{ animation: 'spin 6s linear infinite' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(147,51,234,0.8)]" />
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="About" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(147,51,234,0.04),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-6">
              <div className="font-mono text-primary text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="text-primary/50">//</span> {t.about.label}
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white max-w-md leading-tight">
                {t.about.title}
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-secondary-container rounded-full" />
              <div className="font-mono text-[10px] md:text-xs text-on-surface-variant/40 space-y-1 pt-4 overflow-x-auto whitespace-nowrap scrollbar-none">
                <p><span className="text-primary/60">const</span> <span className="text-secondary">developer</span> = {'{'}</p>
                <p className="pl-4"><span className="text-on-surface-variant/60">name:</span> <span className="text-primary/80">"Rebecca Silva"</span>,</p>
                <p className="pl-4"><span className="text-on-surface-variant/60">role:</span> <span className="text-primary/80">"Full-Stack Dev"</span>,</p>
                <p className="pl-4"><span className="text-on-surface-variant/60">location:</span> <span className="text-primary/80">"RS, Brasil"</span></p>
                <p>{'}'}</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="glass-panel rounded-xl p-5 md:p-8 space-y-4 border-l-2 border-primary/40">
                <div className="flex items-center gap-2 text-primary">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary/70">// {t.about.subtitle}</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-base font-light whitespace-pre-wrap">{t.about.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="Skills" className="py-32 bg-surface-dim relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <p className="font-mono text-primary/60 text-xs tracking-widest">// stack</p>
            <h2 className="text-4xl font-display font-bold">{t.skills.title}</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto font-light">{t.skills.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skillList.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-3 group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary/60 group-hover:bg-primary/20 group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300">
                  {skill.icon}
                </div>
                <span className="font-mono text-center text-[10px] uppercase tracking-widest text-white/50 group-hover:text-primary transition-colors leading-tight">
                  {t.skills.skillNames[i]}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {t.skills.softSkills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-[10px] uppercase tracking-widest text-primary/70 font-bold hover:border-primary/60 hover:bg-primary/15 hover:text-primary hover:shadow-[0_0_12px_rgba(147,51,234,0.2)] transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      {/* Projects Section */}
      <section id="Projects" className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="space-y-3">
              <p className="font-mono text-primary/60 text-xs tracking-widest">// projects</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">{t.projects.title}</h2>
              <p className="text-on-surface-variant max-w-lg font-light">{t.projects.description}</p>
            </div>

            <div className="flex glass-panel p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('featured')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'featured' ? 'bg-primary text-on-primary shadow-[0_0_20px_rgba(147,51,234,0.4)]' : 'text-on-surface-variant hover:text-white'}`}
              >
                {t.projects.portfolio}
              </button>
              <button
                onClick={() => setActiveTab('dev')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'dev' ? 'bg-primary text-on-primary shadow-[0_0_20px_rgba(147,51,234,0.4)]' : 'text-on-surface-variant hover:text-white'}`}
              >
                {t.projects.inDevelopment}
              </button>
            </div>
          </div>

          {/* Horizontal Catalog */}
          <div className="relative">
            {/* Nav arrows */}
            <button
              onClick={() => scrollCatalog('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full glass-panel border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all duration-300 hidden md:flex"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button
              onClick={() => scrollCatalog('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full glass-panel border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all duration-300 hidden md:flex"
            >
              <ArrowRight size={20} />
            </button>

            <div ref={catalogRef} className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {(activeTab === 'featured' ? featuredProjects : developmentProjects).map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, type: 'spring', stiffness: 80 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="group relative flex-shrink-0 w-[min(90vw,460px)] snap-start"
                >
                  <div className="glass-panel rounded-2xl overflow-hidden border border-white/8 group-hover:border-primary/40 group-hover:shadow-[0_0_50px_rgba(147,51,234,0.2)] transition-all duration-500 flex flex-col h-full">
                    {/* Image — full width, fixed height, no crop */}
                    <div className="relative w-full bg-surface-container-low flex items-center justify-center overflow-hidden" style={{ minHeight: '260px', maxHeight: '300px' }}>
                      <Carousel images={project.images} />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-end justify-end p-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary backdrop-blur-md rounded-full text-white hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] transition-all">
                          <ExternalLink size={18} />
                        </a>
                      </div>
                      {/* Tech corner label */}
                      <div className="absolute top-3 left-3 z-20 font-mono text-[9px] text-primary/70 bg-black/60 backdrop-blur-sm px-2 py-1 rounded border border-primary/20">
                        {String(i + 1).padStart(2, '0')} / {String((activeTab === 'featured' ? featuredProjects : developmentProjects).length).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 space-y-4 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map(tag => (
                          <span key={tag} className="font-mono text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 bg-primary/10 border border-primary/25 rounded text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">
                        {lang === 'en' && project.titleEn ? project.titleEn : project.title}
                      </h3>
                      <p className="text-on-surface-variant font-light leading-relaxed text-sm flex-1">
                        {lang === 'en' && project.longDescriptionEn ? project.longDescriptionEn : project.longDescription}
                      </p>

                      {project.features && project.features.length > 0 && (
                        <div className="border-t border-white/5 pt-4">
                          <h4 className="font-mono text-[9px] font-bold text-primary mb-2 uppercase tracking-widest flex items-center gap-1">
                            <span className="text-primary/50">&gt;_</span> Features
                          </h4>
                          <ul className="space-y-1">
                            {(lang === 'en' && project.featuresEn ? project.featuresEn : project.features ?? []).slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-on-surface-variant font-light">
                                <span className="text-primary/50 font-mono mt-0.5 shrink-0">▸</span>
                                {feature}
                              </li>
                            ))}
                            {project.features.length > 4 && (
                              <li className="text-xs text-primary/50 font-mono pl-4">+{project.features.length - 4} more...</li>
                            )}
                          </ul>
                        </div>
                      )}

                      {project.considerations && project.considerations.length > 0 && (
                        <div className="border-t border-white/5 pt-3 space-y-2">
                          <h4 className="font-mono text-[9px] font-bold text-secondary/70 uppercase tracking-widest flex items-center gap-1">
                            <span className="text-secondary/40">//</span> {t.projects.considerationsLabel}
                          </h4>
                          <p className="text-[11px] text-on-surface-variant font-light leading-relaxed italic border-l-2 border-primary/30 pl-3">
                            &#34;{lang === 'en' && project.considerationsEn ? project.considerationsEn.join(' ') : project.considerations.join(' ')}&#34;
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll hint gradient */}
            <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-surface to-transparent pointer-events-none z-10" />
            <div className="absolute left-0 top-0 bottom-8 w-8 bg-gradient-to-r from-surface to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="Contact" className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center gap-12 text-center relative">
          <div className="space-y-4">
            <p className="font-mono text-primary/50 text-xs tracking-widest">// contact</p>
            <h2 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Rebecca Silva</h2>
            <div className="flex flex-col gap-2 text-on-surface-variant text-[13px] py-4 font-mono">
              <p><span className="text-primary/50">location:</span> RS, Brasil</p>
              <p><span className="text-primary/50">email:</span> rebeccaaraujo163@gmail.com</p>
              <p><span className="text-primary/50">phone:</span> +55 53 99950-6574</p>
            </div>
            <div className="flex gap-8 justify-center">
              <a href="https://github.com/rebeccasilv" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] rounded-full p-1">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/rebecca-silva-478809247" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] rounded-full p-1">
                <Linkedin size={24} />
              </a>
              <a href="https://wa.me/5553999506574" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] rounded-full p-1">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <div className="text-on-surface-variant text-[11px] font-mono uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between w-full gap-4">
            <span>{t.footer.rights}</span>
            <span className="flex items-center justify-center gap-2 group cursor-pointer hover:text-primary transition-colors">
              <Ghost size={14} className="group-hover:animate-bounce" /> Rebecca Silva
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
