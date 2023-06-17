import { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../constants/server.constants";
import AllImages from "./AllImages";

const S3Page = () => {
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file as any);
    formData.append("caption", caption);
    await axios.post(`${SERVER_URL}/uploads/file`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const fileSelected = (event: any) => {
    const file = event.target.files[0];
    setFile(file);
  };
  return (
    <>
      <h1>Image uploading using S3</h1>
      <div>
        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={submit}
            style={{ width: 650 }}
            className="flex flex-col space-y-5 px-5 py-14"
          >
            <input onChange={fileSelected} type="file" accept="image/*"></input>
            <input
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              type="text"
              placeholder="Caption"
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>
        <AllImages />
        {/* Show all the posts */}
      </div>
    </>
  );
};

export default S3Page;
