import { FaFacebook } from "react-icons/fa";

const FaceBookShare = ({url}) => {
    const handleShare = () => {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url || window.location.href)}`;
        const popupWidth = 600;
        const popupHeight = 400;
        const left = window.screen.width / 2 - popupWidth / 2;
        const top = window.screen.height / 2 - popupHeight / 2;
    
        window.open(
          shareUrl,
          'Facebook Share',
          `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
        );
      };
    
    return (
        <button
      onClick={handleShare}
      className="flex items-center justify-center p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      <FaFacebook className="mr-2" />
      Share on Facebook
    </button>
    );
};

export default FaceBookShare;