const empresas = [
    "apex",
    "lucid",
    "tradeify",
    "topstep"
];

const datosEmpresas = {};

async function cargarEmpresas() {

    for (const id of empresas) {

        try {

            const response =
                await fetch(`data/${id}.json`);

            if (!response.ok) {
                throw new Error(
                    `No se pudo cargar ${id}.json`
                );
            }

            datosEmpresas[id] =
                await response.json();

        } catch (error) {

            console.error(error);

        }

    }

    cargarSelectorEmpresas();

    empresa.dispatchEvent(
        new Event("change")
    );
}
