import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { siginSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },

        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

     const data = await res.json()
     dispatch(siginSuccess(data))
     navigate("/")
      console.log(result);
    } catch (err) {
      console.log("Could not sign In whith google", err);
    }
  };

  return (
    <button
      onClick={handleGoogle}
      type="button"
      className="bg-red-700 text-white rounded-lg uppercase p-3 hover:opacity-95"
    >
      Continue With Google
    </button>
  );
}

export default OAuth;
