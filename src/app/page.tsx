import Container from "@/components/template/Container";
import Flex from "@/components/template/Flex";
import Grid from "@/components/template/Grid";
import Wrap from "@/components/template/Wrap";


export default function Home() {
  return (
    <div className="w-96 bg-yellow-500">
      <Container bigPadding>
        <p className="w-20 h-20 bg-red-200">Olá</p>
        <p className="w-20 h-20 bg-green-200">Olá</p>
        <p className="w-20 h-20 bg-blue-200">Olá</p>
        <p className="w-20 h-20 bg-yellow-200">Olá</p>
        <p className="w-20 h-20 bg-purple-200">Olá</p>
        <p className="w-20 h-20 bg-orange-200">Olá</p>
        <p className="w-20 h-20 bg-pink-200">Olá</p>
        <p className="w-20 h-20 bg-gray-200">Olá</p>
      </Container>
    </div>
  );
}
