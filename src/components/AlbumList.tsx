import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

type Album = {
  userId: number;
  id: number;
  title: string;
};

const sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const fetchAlbums = async () => {
  const result = await axios
    .get<Album[]>("https://jsonplaceholder.typicode.com/albums")
    .then(await sleep(5000));
  return result.data;
};

export const AlbumList = () => {
  const { data } = useSuspenseQuery<Album[]>({
    queryKey: ["userId"],
    queryFn: fetchAlbums,
  });

  return (
    <div
      style={{
        backgroundColor: "cornsilk",
        border: "2px solid gray",
        height: "300px",
        overflowY: "scroll",
      }}
    >
      <h2>アルバム</h2>
      {data?.map((album) => (
        <p key={album.id}>{album.title}</p>
      ))}
    </div>
  );
};
