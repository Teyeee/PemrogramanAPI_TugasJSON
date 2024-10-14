import toserbaData from "../../public/data/Toserba.json"; // Sesuaikan dengan path JSON
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

interface IProduk {
  IdProduk: string;
  NamaProduk: string;
  Warna?: string; // Warna hanya untuk bolpoin
  Jenis?: string; // Jenis hanya untuk bolpoin
  Panjang?: string; // Panjang hanya untuk sendok
  Material?: string; // Material hanya untuk sendok
  Harga: string;
  Stok: number;
  Vendor: string;
  Deskripsi: string;
}

const ToserbaList = () => {
  const produk: IProduk[] = toserbaData["Toserba"]; // Menggunakan notasi bracket

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">DAFTAR PRODUK TOSERBA</h1>
      {produk.map((item) => (
        <CardList key={item.IdProduk}>
          <p>{item.NamaProduk}</p>
          {item.Warna && <p>Warna: {item.Warna}</p>}
          {item.Jenis && <p>Jenis: {item.Jenis}</p>}
          {item.Panjang && <p>Panjang: {item.Panjang}</p>}
          {item.Material && <p>Material: {item.Material}</p>}
          <p>Harga: Rp {parseInt(item.Harga).toLocaleString()}</p>
          <p>Stok: {item.Stok}</p>
          <p>Vendor: {item.Vendor}</p>
          <p>Deskripsi: {item.Deskripsi}</p>
          <ViewUserButton userId={item.IdProduk} />
        </CardList>
      ))}
    </>
  );
};

export default ToserbaList;
