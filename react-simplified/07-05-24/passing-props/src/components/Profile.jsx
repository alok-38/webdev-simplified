import Avatar from "./Avatar";

export default function Profile() {
  return (
    <div className="flex gap-10">
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={100}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={100}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
}
