const teamGroups = document.getElementById("team-groups");
const teamDialog = document.getElementById("team-dialog");

const getInitials = (name) => name.split(" ").map((part) => part[0]).join("").slice(0, 2);

const createPhotoMarkup = (member, className, tint) => `
  <span class="${className} ${className}--${tint}">
    <img src="${member.photo}" alt="${member.alt}" loading="lazy" width="640" height="640">
    <span class="${className}__fallback" aria-hidden="true" hidden>${getInitials(member.name)}</span>
  </span>
`;

const createCardMarkup = (member, index) => {
  const tints = ["surface", "highlight", "neutral"];
  return `
    <button type="button" class="team-card" data-member-index="${index}" aria-label="View details for ${member.name}">
      ${createPhotoMarkup(member, "team-card__photo", tints[index % tints.length])}
      <span class="team-card__name">${member.name}</span>
      <span class="team-card__role">${member.role}</span>
    </button>
  `;
};

const createGroupMarkup = (group, groupIndex) => `
  <section class="team-group" aria-labelledby="team-group-${groupIndex}">
    <h2 id="team-group-${groupIndex}" class="team-group__title">${group.title}</h2>
    <div class="team-grid">
      ${group.members.map((member, memberIndex) => createCardMarkup(member, `${groupIndex}-${memberIndex}`)).join("")}
    </div>
  </section>
`;

const findMember = (memberIndex) => {
  const [groupIndex, memberIndexInGroup] = memberIndex.split("-").map(Number);
  return TEAM_GROUPS[groupIndex].members[memberIndexInGroup];
};

const setImageFallback = (photoContainer) => {
  const image = photoContainer.querySelector("img");
  const fallback = photoContainer.querySelector(".team-card__photo__fallback, .team-dialog__photo__fallback");
  image.addEventListener("error", () => {
    image.hidden = true;
    fallback.hidden = false;
  });
  if (image.complete && image.naturalWidth === 0) {
    image.dispatchEvent(new Event("error"));
  }
};

const openMember = (member, card) => {
  const media = teamDialog.querySelector(".team-dialog__media");
  media.innerHTML = createPhotoMarkup(member, "team-dialog__photo", "surface");
  teamDialog.querySelector("#team-dialog-name").textContent = member.name;
  teamDialog.querySelector(".team-dialog__role").textContent = member.role;
  teamDialog.querySelector(".team-dialog__tags").innerHTML = `<span class="tag">${member.pronouns}</span><span class="tag">${member.mbti}</span>`;
  teamDialog.querySelector(".team-dialog__bio").textContent = member.bio;
  setImageFallback(media);
  teamDialog.showModal();
  teamDialog.addEventListener("close", () => card.focus(), { once: true });
};

teamGroups.innerHTML = TEAM_GROUPS.map(createGroupMarkup).join("");
document.querySelectorAll(".team-card").forEach((card) => {
  setImageFallback(card.querySelector(".team-card__photo"));
  card.addEventListener("click", () => openMember(findMember(card.dataset.memberIndex), card));
});

teamDialog.querySelector(".team-dialog__close").addEventListener("click", () => teamDialog.close());
teamDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    teamDialog.close();
  }
});
teamDialog.addEventListener("click", (event) => {
  if (event.target === teamDialog) teamDialog.close();
});
