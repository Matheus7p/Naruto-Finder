const LoadingNaruto = () => {
    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center">
            <img src="/naruto.webp" alt="Loading Naruto" className="mb-4" />
            <h2 className="text-white font-bold">Carregando...</h2>
        </div>
    );
}

export default LoadingNaruto;
