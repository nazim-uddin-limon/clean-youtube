import { useStoreActions } from "easy-peasy"



const useApp = () =>{
    const getPlaylist = useStoreActions((actions)=> actions.playlist.getPlaylist)

    const addPlaylist = (playlistId) =>  {
        getPlaylist({playlistId})
    }

    return {
        
        addPlaylist
    }
}

export default useApp