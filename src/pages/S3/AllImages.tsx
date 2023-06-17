import axios from "axios";
import { SERVER_URL } from "../../constants/server.constants";
import { useQuery } from "react-query";
import { S3File } from "./s3.interface";
import { MdDelete } from "react-icons/md";

const AllImages = () => {
  const getImages = async () => {
    const res = await axios.get(`${SERVER_URL}/uploads/all`);
    return res.data as { images: S3File[] };
  };

  const { data, error, isLoading, refetch } = useQuery("getImages", getImages);

  const deleteImage = async (id: string) => {
    try {
      return axios.delete(`${SERVER_URL}/uploads/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  if (isLoading) {
    return <div>Loading images...</div>;
  }
  if (error) {
    return <div>Error fetching images</div>;
  }
  return (
    <>
      <div className="mx-5">
        <div className="grid grid-cols-2 gap-4">
          {data?.images.map((image, index) => {
            return (
              <div key={index} className="relative">
                <img
                  src={image.imageUrl}
                  alt={image.caption}
                  className="block"
                />
                <button
                  className="absolute bottom-0 left-0"
                  onClick={() => {
                    deleteImage(image.imageName);
                    refetch(); // refetch all images to refresh
                  }}
                >
                  <MdDelete />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllImages;
