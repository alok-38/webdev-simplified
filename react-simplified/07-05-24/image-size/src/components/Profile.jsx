import Avatar from "./Avatar";

export default function Profile() {
  return (
    <div className="flex gap-10 items-center justify-center mt-20">
      <Avatar
        size={40}
        person={{ name: "Gregorio Y. Zara", imageId: "7vQD0fP" }}
      ></Avatar>
      <Avatar
        size={120}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
    </div>
  );
}
