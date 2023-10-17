interface Props {
  id: string;
  title: string;
  downloadNumber: number;
  image: string;
}

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ResourceCard = ({ id, title, downloadNumber, image }: Props) => {
  return (
    <>
      <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
        <Link href={`/resource/${id}`}>
          <CardHeader className="flex-center flex-col gap-2.5 !p-0">
            <div className="h-fit w-full">
              <Image
                src={image}
                className="h-full rounded-md object-cover"
                width={384}
                height={440}
                alt={title}
              />
            </div>

            <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
              {title}
            </CardTitle>
          </CardHeader>
        </Link>
        <CardContent className="flex-between mt-4 p-0">
          <div className="flex-center gap-1.5 body-medium text-white">
            <Image
              src={"/downloads.svg"}
              alt="download"
              width={20}
              height={20}
            />
            {`${downloadNumber}`}
          </div>
          <Link href={`/resource/${id}`} className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
            Contact now
            <Image src={'/arrow-blue.svg'} width={13} height={10} alt="see-more" />
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default ResourceCard;
