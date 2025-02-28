import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-4">
          Bem-vindo ao nosso Design System!
        </h1>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          O que é um Design System?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Um Design System é um conjunto de padrões reutilizáveis, componentes
          de interface e diretrizes que ajudam a criar consistência e eficiência
          no desenvolvimento de produtos digitais. Ele é composto por
          componentes de UI, paletas de cores, tipografia, espaçamento, entre
          outros elementos, que garantem que a interface de usuário seja
          visualmente coesa e funcional em toda a aplicação.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Com um Design System, equipes de design e desenvolvimento podem
          colaborar de forma mais eficiente, criando experiências consistentes e
          escaláveis para os usuários. Ele também ajuda na redução de
          inconsistências visuais e na otimização do tempo de desenvolvimento.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Por que um Design System é importante?
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
          <li>
            <strong>Consistência:</strong> Garantia de uma interface coesa e
            fácil de entender para os usuários.
          </li>
          <li>
            <strong>Eficiência:</strong> Reduz o tempo de desenvolvimento com
            componentes prontos e reutilizáveis.
          </li>
          <li>
            <strong>Escalabilidade:</strong> Facilita a adaptação de novas
            funcionalidades e melhorias no produto.
          </li>
          <li>
            <strong>Colaboração:</strong> Facilita a comunicação entre designers
            e desenvolvedores, alinhando as expectativas desde o início do
            projeto.
          </li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Explore nosso Design System!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          O Design System está aqui para ajudar sua equipe a criar produtos
          incríveis de maneira mais rápida e com qualidade. Explore os
          componentes e veja como eles podem ser usados no seu próximo projeto!
        </p>
        <Button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Explorar Componentes
        </Button>
      </section>
    </div>
  );
};

export default Home;
