const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SlideWrapper = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ translateX }) => `translateX(-${translateX}%)`};
`;

const SlideItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'black' : 'grey')};
`;

const NavButton = styled.button<{ direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'prev' ? 'left: 10px' : 'right: 10px')};
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;
