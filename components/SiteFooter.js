export default function SiteFooter() {
  return (
    <div className="flex justify-between items-center bg-black p-4">
      <div className="text-sm text-center font-medium text-gray-500">
        Code Good Copy Bad &copy; 1857-2021
      </div>
      <a href="https://www.digitalocean.com/?refcode=b0ed387c5716&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
        <img
          src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg"
          alt="DigitalOcean Referral Badge"
          className="rounded-lg w-32"
        />
      </a>
    </div>
  );
}
