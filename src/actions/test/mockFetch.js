const mockFetch = mockResponse => (requestInfo, requestInit) => {
    return new Promise((resolve, reject) => {
        resolve({
            json: () => {
                return new Promise((resolve2, reject2) => {
                    resolve2(mockResponse.data)
                })
            },
            status: mockResponse.status
        })
    })
}

export default mockFetch