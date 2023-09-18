import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index(text) {
  toast(text);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}