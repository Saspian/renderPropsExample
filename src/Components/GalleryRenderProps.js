import { useEffect, useState } from "react";
import axios from "axios";

function GalleryRenderProps(props) {
  const [imageInfo, setImageInfo] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      setImageInfo(res.data);
    });
  }, []);

  return props.children({
    imageInfo,
    maxPhoto: 45
  });
}

export default GalleryRenderProps;
