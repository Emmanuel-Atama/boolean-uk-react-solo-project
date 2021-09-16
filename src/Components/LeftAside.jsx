export default function LeftAside(props) {
    const { ListOfChildren } = props;
    return (
      <>
        <aside className="left-aside">
          <ListOfChildren />
        </aside>
      </>
    );
  }
  