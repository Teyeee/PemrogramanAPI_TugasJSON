'use client';

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    if (userId === "101") {
      alert("Ini adalah bolpoin kualitas tinggi.");
    } else if (userId === "202") {
      alert("Ini adalah sendok kayu tradisional.");
    } else {
      alert("Produk tidak dikenali.");
    }
  };
  
  return (
    <>
      <button onClick={handleClick}>Lihat Produk</button>
    </>
  );
};

export default ViewUserButton;
