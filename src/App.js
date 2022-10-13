import Header from "./app/components/ui/header/header";
import NavBar from "./app/components/ui/navBar";
import MainContent from "./app/components/layouts/mainContent";
import AppLoader from "./app/components/ui/hoc/appLoader";
import { SnackbarProvider } from "notistack";
function App() {
    return (
        <AppLoader>
            <SnackbarProvider
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <Header />
                <NavBar />
                <MainContent />
            </SnackbarProvider>
        </AppLoader>
    );
}

export default App;
