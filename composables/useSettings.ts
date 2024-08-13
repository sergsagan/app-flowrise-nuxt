export const useSettings = () => {
    const prismic = usePrismic()
    return useAsyncData('$settings', async () => {
        return prismic.client.getSingle('settings')
    }).data
}
