const LoadingNaruto = () => {
    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70">
            <img src="/naruto.webp" alt="Loading Naruto" className="mb-4" />
            <h2 className="text-white font-bold">Carregando...</h2>
        </div>
    );
}

export default LoadingNaruto;
