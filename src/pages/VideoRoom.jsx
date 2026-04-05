import { useEffect } from "react";
import { useParams } from "react-router-dom";

const VideoRoom = () => {
  const { roomId } = useParams();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://meet.jit.si/external_api.js";
    script.async = true;

    script.onload = () => {
      const domain = "meet.jit.si";
      new window.JitsiMeetExternalAPI(domain, {
        roomName: roomId,
        width: "100%",
        height: 600,
        parentNode: document.getElementById("jitsi-container"),
      });
    };

    document.body.appendChild(script);
  }, [roomId]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Live Class 🎥
      </h2>

      <div id="jitsi-container" className="w-full h-[600px]" />
    </div>
  );
};

export default VideoRoom;