document.addEventListener('DOMContentLoaded', () => {
  const assets = document.querySelectorAll('[data-asset-id]')
  const search = document.querySelector('.search')

  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase()
    for (const asset of assets) {
      asset.classList.toggle('hidden', !asset.dataset.assetId.toLowerCase().includes(query))
    }

    for (const count of document.querySelectorAll('[data-asset-count]')) {
      count.textContent = count.closest('section').querySelectorAll('[data-asset-id]:not(.hidden)').length
    }
  })

  for (const asset of assets) {
    asset.querySelector('[title="Copy ID"]').addEventListener('click', async event => {
      event.preventDefault()

      const id = asset.dataset.assetId

      try {
        await navigator.clipboard.writeText(id)
      } catch {
        console.error('Could not copy. Select the asset identifier and copy it manually.')
      }
    })
  }
})
