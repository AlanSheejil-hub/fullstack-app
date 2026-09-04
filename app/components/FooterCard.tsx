

type FooterCardProps = {
    title: string;
    companyname: string;
    year: number;
    onClick?: () => void;
}

export default function FooterCard({title,companyname,year,onClick}:FooterCardProps) {


return (
<div>
    <p className="text-center text-gray-500 mt-10">
      &copy; {year} {companyname} {title}
    </p>
    
</div>
);

}