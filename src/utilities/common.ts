export const pageRedirects = {
  onlineProposal: 'online-proposal',
  terms: 'terms',
  summary: 'summary',
  payment: 'payment',
  verify: 'verify'
}

export const getNavigateUrl = (type: string, proposalId: string) => {
  return `/${type}/${proposalId}`
}