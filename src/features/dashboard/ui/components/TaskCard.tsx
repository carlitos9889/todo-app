import {
  Card,
  CardHeader,
  Avatar,
  Checkbox,
  CardBody,
  CardFooter,
} from "@nextui-org/react";

export const TaskCard = () => {
  return (
    <Card className="max-w-[540px] w-full shadow-small border-1 border-[#A1A3AB]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Zoey Lang
            </h4>
            {/* <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5> */}
          </div>
        </div>
        <Checkbox />
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure!
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">Priority:</p>
          <p className=" text-default-400 text-small">Moderate</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">Status:</p>
          <p className="text-default-400 text-small">Not Started</p>
        </div>
      </CardFooter>
    </Card>
  );
};
