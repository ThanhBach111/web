import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Toastify = {
  alert: (title) => {
    toast.info(title, toast.POSITION.TOP_RIGHT);
  },
  error: (title) => {
    toast.error(title, toast.POSITION.TOP_RIGHT);
  },
};

export default Toastify;
