import React from "react";
import { useAuth } from "../../contexts/authContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="text-2xl font-bold pt-14 container-lg py-5">
        Hiiii{" "}
        {currentUser.displayName ? currentUser.displayName : currentUser.email},
        you are logged in Successfully !!
      </div>
      <div
        className="p-5 bg-neutral-900 font-serif text-white decoration-white d-flex justify-content-center 
        border-yellow-500
        border-8 
        divide-y-2  
        container mx-auto py-8 
        break-normal
        w-96
        h-dvh
        shadow-xl"
      >
        <h1 className="text-center text-2xl">அகரம் உறுதிமொழி !!!!</h1>

        <h3 className="text-center position-absolute top-50 start-50 translate-middle indent-10 break-keep py-2">
          கல்வியே எங்கள் ஆயுதம். கல்வியே எங்கள் கேடயம். கல்வியே எங்களின் சமூகப்
          பாதுகாப்பு. கல்வி வெளிச்சம் தேடி அலைந்தோம். நல்லோர்கள் கை கொடுத்தனர்,
          வெளிச்சம் மட்டும் தராமல் கையில் விளக்கையே தந்திருக்கிறது அகரம். கல்வி
          கற்று வேலை பெற்று குறைந்தபட்சம் ஒருவரையாவது படிக்க வைப்போம். திசை
          தவறாமல் , உதவி மறவாமல் நல்ல குடிமக்களாக இருப்போம். அகரத்தின் வீரியம்
          மிக்க விதைகளாக ஜெயித்து வருவோம், நாங்கள் கற்றதையும் பெற்றதையும்
          எல்லோருக்கும் பகிர்ந்து தருவோம் என்று உறுதி ஏற்கிறோம்.
        </h3>
        <div class="relative h-32 w-50">
          <Link to="/studenttable">
            <button class="bg-yellow-500 text-white rounded-lg px-4 py-2 m-12 absolute inset-x-6 bottom-0 h-10">
              Enter
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
