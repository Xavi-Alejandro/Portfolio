export default function Resume() {
  return (
    <>
      <div className="container text-center">
        <object
          title="Resume"
          data="./media/XavierLozanoResume2022.pdf"
          type="application/pdf"
          width={"100%"}
          height={"1200px"}
        >
          <p>It seems your browser does not support PDFs</p>
          <p>
            <a
              className="btn btn-info"
              href="https://drive.google.com/file/d/1ZaIpxQuaP4uUPTzlbvwMj0TKUdrA4Ch8/view?usp=sharing"
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
