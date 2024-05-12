import { useParams } from "react-router-dom";
import Header from "../../components/header";
import MainLayout from "./mainLayout";
import usePlayer from "../../hooks/usePlayer";

const PlayerPage = () => {
  const { playlistId } = useParams();
  usePlayer(playlistId);
  return (
    <>
      <Header />
      <MainLayout />
    </>
  );
};

export default PlayerPage;
