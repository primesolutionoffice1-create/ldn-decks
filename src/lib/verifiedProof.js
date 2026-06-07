import proofPayload from '@/data/verifiedProofSnippets.json';

export function getVerifiedProofSnippets() {
  return proofPayload?.snippets || [];
}

export function getVerifiedProjectProofSnippets() {
  return getVerifiedProofSnippets().filter((snippet) => snippet.type === 'project_case_study');
}

export function getVerifiedReviewSourceSnippets() {
  return getVerifiedProofSnippets().filter((snippet) => snippet.type === 'public_review_source');
}

export function getVerifiedProofSummary() {
  const projects = getVerifiedProjectProofSnippets();
  const reviewSources = getVerifiedReviewSourceSnippets();
  const skipped = proofPayload?.skipped || [];

  return {
    generated: proofPayload?.generated || null,
    projects,
    reviewSources,
    skipped,
    projectCount: projects.length,
    reviewSourceCount: reviewSources.length,
    skippedCount: skipped.length,
  };
}
