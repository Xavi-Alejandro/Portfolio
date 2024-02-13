export default function Resume() {
  return (
    <>
      <div className="container text-center">
        <object
          title="Resume"
          data="./media/XavierLozanoResume2024.pdf"
          type="application/pdf"
          width={"100%"}
          height={"1200px"}
        >
          <p>It seems your browser does not support PDFs</p>
          <p>
            <a
              className="btn btn-info"
              href="https://docs.google.com/document/d/1EBgLJSmTTZhhP5jAjNsRtEZ_1PXWvQyiM3pHQoxK5GA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download resume
            </a>
          </p>
        </object>
      </div>
    </>
  );
}
