export default function KorsnikDijete({ime, godine, children}) {
    return (
        <div>
            <p>Ime mog djeteta je {ime}, ima {godine}</p>
            <p>{children}</p>
            </div>
    );
}
