import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function StartingLevel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/src/assets/map/StartingLevel.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Rig" position={[0, 11.772, 0]}>
          <primitive object={nodes.root} />
          <skinnedMesh
            name="Skeleton_Rogue_Head"
            geometry={nodes.Skeleton_Rogue_Head.geometry}
            material={materials.skeleton}
            skeleton={nodes.Skeleton_Rogue_Head.skeleton}
          />
        </group>
        <group name="Rig001" position={[0, 11.772, 0]}>
          <primitive object={nodes.root_1} />
          <skinnedMesh
            name="Skeleton_Rogue_Head001"
            geometry={nodes.Skeleton_Rogue_Head001.geometry}
            material={materials["skeleton.001"]}
            skeleton={nodes.Skeleton_Rogue_Head001.skeleton}
          />
        </group>
        <group
          name="Rig002"
          position={[3.525, 11.772, 0]}
          rotation={[0, 1.128, 0]}
        >
          <primitive object={nodes.root_2} />
          <skinnedMesh
            name="Skeleton_Rogue_Head002"
            geometry={nodes.Skeleton_Rogue_Head002.geometry}
            material={materials["skeleton.002"]}
            skeleton={nodes.Skeleton_Rogue_Head002.skeleton}
          />
        </group>
        <mesh
          name="wall_archedwindow_gated"
          geometry={nodes.wall_archedwindow_gated.geometry}
          material={materials["texture.138"]}
          position={[6, 0, 14]}
        />
        <mesh
          name="wall_corner_gated"
          geometry={nodes.wall_corner_gated.geometry}
          material={materials["texture.143"]}
          position={[-2, 0, 2]}
        />
        <mesh
          name="wall_cracked"
          geometry={nodes.wall_cracked.geometry}
          material={materials["texture.146"]}
          position={[-2, 0, -6]}
        />
        <mesh
          name="wall_inset"
          geometry={nodes.wall_inset.geometry}
          material={materials["texture.157"]}
          position={[2, 0, -6]}
        />
        <mesh
          name="wall_inset_candles"
          geometry={nodes.wall_inset_candles.geometry}
          material={materials["texture.158"]}
          position={[10, 0, 14]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="wall_pillar"
          geometry={nodes.wall_pillar.geometry}
          material={materials["texture.164"]}
          position={[14, 0, -6]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall_shelves"
          geometry={nodes.wall_shelves.geometry}
          material={materials["texture.166"]}
          position={[-14, 0, -14]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall_Tsplit"
          geometry={nodes.wall_Tsplit.geometry}
          material={materials["texture.168"]}
          position={[-2, 0, 14]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="wall_window_closed_scaffold"
          geometry={nodes.wall_window_closed_scaffold.geometry}
          material={materials["texture.171"]}
          position={[-14, 0, -10]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          name="table_small"
          geometry={nodes.table_small.geometry}
          material={materials["texture.210"]}
          position={[-12.649, 0, 0.361]}
        />
        <mesh
          name="bottle_A_green"
          geometry={nodes.bottle_A_green.geometry}
          material={materials["texture.265"]}
          position={[-6.364, 0, -7.436]}
        />
        <mesh
          name="barrel_large_decorated"
          geometry={nodes.barrel_large_decorated.geometry}
          material={materials["texture.267"]}
          position={[-12.739, 0, -4.616]}
        />
        <mesh
          name="bed_floor"
          geometry={nodes.bed_floor.geometry}
          material={materials["texture.276"]}
          position={[-3.287, 0, 12.024]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="book_brown"
          geometry={nodes.book_brown.geometry}
          material={materials["texture.278"]}
          position={[13.289, 1.086, -10.983]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          name="book_grey"
          geometry={nodes.book_grey.geometry}
          material={materials["texture.279"]}
          position={[13.308, 1.145, -10.64]}
          rotation={[-2.356, 0, -Math.PI / 2]}
        />
        <mesh
          name="book_tan"
          geometry={nodes.book_tan.geometry}
          material={materials["texture.280"]}
          position={[12.977, 1.277, -10.933]}
          rotation={[-0.091, -0.236, -0.701]}
        />
        <mesh
          name="bookcase_double_decoratedA"
          geometry={nodes.bookcase_double_decoratedA.geometry}
          material={materials["texture.282"]}
          position={[13, 0, -18.016]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          name="bookcase_double_decoratedB"
          geometry={nodes.bookcase_double_decoratedB.geometry}
          material={materials["texture.283"]}
          position={[10.759, 0, -21.137]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="bottle_A_green001"
          geometry={nodes.bottle_A_green001.geometry}
          material={materials["texture.288"]}
          position={[-5.462, 0, -7.266]}
        />
        <mesh
          name="bottle_A_labeled_brown"
          geometry={nodes.bottle_A_labeled_brown.geometry}
          material={materials["texture.289"]}
          position={[-5.862, 0, -7.354]}
        />
        <mesh
          name="bottle_A_labeled_green"
          geometry={nodes.bottle_A_labeled_green.geometry}
          material={materials["texture.290"]}
          position={[-5.958, 0, -6.756]}
        />
        <mesh
          name="bottle_B_brown"
          geometry={nodes.bottle_B_brown.geometry}
          material={materials["texture.291"]}
          position={[-5.513, 0, -6.794]}
        />
        <mesh
          name="bottle_C_brown"
          geometry={nodes.bottle_C_brown.geometry}
          material={materials["texture.293"]}
          position={[-6.387, 0, -6.968]}
        />
        <mesh
          name="candle"
          geometry={nodes.candle.geometry}
          material={materials["texture.301"]}
          position={[5.971, 0.799, -5.931]}
        />
        <mesh
          name="candle_melted"
          geometry={nodes.candle_melted.geometry}
          material={materials["texture.303"]}
          position={[12.791, 1.147, -8.172]}
          rotation={[Math.PI / 2, 0, 0.817]}
        />
        <mesh
          name="chair"
          geometry={nodes.chair.geometry}
          material={materials["texture.307"]}
          position={[10.872, 0.401, -10.235]}
          rotation={[Math.PI, 0.789, Math.PI / 2]}
        />
        <mesh
          name="chest_mimic"
          geometry={nodes.chest_mimic.geometry}
          material={materials["texture.312"]}
          position={[6, 0, 8.5]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          <mesh
            name="chest_mimic_lid"
            geometry={nodes.chest_mimic_lid.geometry}
            material={materials["texture.312"]}
            position={[0, 0.5, -0.565]}
            rotation={[-1.195, 0, 0]}
          />
        </mesh>
        <mesh
          name="crate_large"
          geometry={nodes.crate_large.geometry}
          material={materials["texture.318"]}
          position={[-6.001, 0, -7.104]}
        />
        <mesh
          name="keyring"
          geometry={nodes.keyring.geometry}
          material={materials["texture.326"]}
          position={[6.561, 0.514, 7.895]}
          rotation={[2.656, -0.132, -2.792]}
        />
        <mesh
          name="pillar"
          geometry={nodes.pillar.geometry}
          material={materials["texture.330"]}
          position={[6, 0, 10]}
        />
        <mesh
          name="pillar_decorated"
          geometry={nodes.pillar_decorated.geometry}
          material={materials["texture.331"]}
          position={[6, 4, 10]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="plate_food_B"
          geometry={nodes.plate_food_B.geometry}
          material={materials["texture.334"]}
          position={[-5.656, 0.556, 12.579]}
        />
        <mesh
          name="plate_small"
          geometry={nodes.plate_small.geometry}
          material={materials["texture.335"]}
          position={[-9.3, 1, -11.5]}
        />
        <mesh
          name="shelf_small_books"
          geometry={nodes.shelf_small_books.geometry}
          material={materials["texture.339"]}
          position={[13.698, 2.494, -10.223]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          name="shelf_small_candles"
          geometry={nodes.shelf_small_candles.geometry}
          material={materials["texture.340"]}
          position={[-1.418, 2.394, -5.724]}
        />
        <mesh
          name="table_long"
          geometry={nodes.table_long.geometry}
          material={materials["texture.349"]}
          position={[-10, 0, -12.5]}
        />
        <mesh
          name="table_long_broken"
          geometry={nodes.table_long_broken.geometry}
          material={materials["texture.350"]}
          position={[12.376, 0, -9.399]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="torch_lit"
          geometry={nodes.torch_lit.geometry}
          material={materials["texture.367"]}
          position={[-13.572, 2.201, -11.409]}
          rotation={[0, 0, -0.726]}
        />
        <mesh
          name="chair001"
          geometry={nodes.chair001.geometry}
          material={materials["texture.414"]}
          position={[-9, 0, -11.5]}
        />
        <mesh
          name="floor_tile_large006"
          geometry={nodes.floor_tile_large006.geometry}
          material={materials["texture.039"]}
          position={[0, 0, -8]}
        />
        <mesh
          name="floor_tile_large007"
          geometry={nodes.floor_tile_large007.geometry}
          material={materials["texture.040"]}
          position={[4, 0, -8]}
        />
        <mesh
          name="floor_tile_large008"
          geometry={nodes.floor_tile_large008.geometry}
          material={materials["texture.041"]}
          position={[-4, 0, -8]}
        />
        <mesh
          name="floor_tile_large009"
          geometry={nodes.floor_tile_large009.geometry}
          material={materials["texture.045"]}
          position={[-4, 0, -20]}
        />
        <mesh
          name="floor_tile_large010"
          geometry={nodes.floor_tile_large010.geometry}
          material={materials["texture.046"]}
          position={[4, 0, -20]}
        />
        <mesh
          name="floor_tile_large011"
          geometry={nodes.floor_tile_large011.geometry}
          material={materials["texture.047"]}
          position={[0, 0, -20]}
        />
        <mesh
          name="floor_tile_large012"
          geometry={nodes.floor_tile_large012.geometry}
          material={materials["texture.048"]}
          position={[0, 0, -16]}
        />
        <mesh
          name="floor_tile_large013"
          geometry={nodes.floor_tile_large013.geometry}
          material={materials["texture.049"]}
          position={[4, 0, -16]}
        />
        <mesh
          name="floor_tile_large014"
          geometry={nodes.floor_tile_large014.geometry}
          material={materials["texture.050"]}
          position={[-4, 0, -16]}
        />
        <mesh
          name="floor_tile_large015"
          geometry={nodes.floor_tile_large015.geometry}
          material={materials["texture.051"]}
          position={[-4, 0, -12]}
        />
        <mesh
          name="floor_tile_large016"
          geometry={nodes.floor_tile_large016.geometry}
          material={materials["texture.052"]}
          position={[4, 0, -12]}
        />
        <mesh
          name="floor_tile_large017"
          geometry={nodes.floor_tile_large017.geometry}
          material={materials["texture.053"]}
          position={[0, 0, -12]}
        />
        <mesh
          name="floor_tile_large018"
          geometry={nodes.floor_tile_large018.geometry}
          material={materials["texture.054"]}
          position={[8, 0, -8]}
        />
        <mesh
          name="floor_tile_large020"
          geometry={nodes.floor_tile_large020.geometry}
          material={materials["texture.056"]}
          position={[12, 0, -8]}
        />
        <mesh
          name="floor_tile_large021"
          geometry={nodes.floor_tile_large021.geometry}
          material={materials["texture.057"]}
          position={[12, 0, -4]}
        />
        <mesh
          name="floor_tile_large023"
          geometry={nodes.floor_tile_large023.geometry}
          material={materials["texture.059"]}
          position={[8, 0, -4]}
        />
        <mesh
          name="floor_tile_large024"
          geometry={nodes.floor_tile_large024.geometry}
          material={materials["texture.060"]}
          position={[8, 0, 0]}
        />
        <mesh
          name="floor_tile_large027"
          geometry={nodes.floor_tile_large027.geometry}
          material={materials["texture.063"]}
          position={[-12, 0, 0]}
        />
        <mesh
          name="floor_tile_large028"
          geometry={nodes.floor_tile_large028.geometry}
          material={materials["texture.064"]}
          position={[-8, 0, 0]}
        />
        <mesh
          name="floor_tile_large031"
          geometry={nodes.floor_tile_large031.geometry}
          material={materials["texture.067"]}
          position={[-8, 0, -4]}
        />
        <mesh
          name="floor_tile_large032"
          geometry={nodes.floor_tile_large032.geometry}
          material={materials["texture.068"]}
          position={[-12, 0, -4]}
        />
        <mesh
          name="floor_tile_large033"
          geometry={nodes.floor_tile_large033.geometry}
          material={materials["texture.069"]}
          position={[-12, 0, -8]}
        />
        <mesh
          name="floor_tile_large034"
          geometry={nodes.floor_tile_large034.geometry}
          material={materials["texture.070"]}
          position={[-8, 0, -8]}
        />
        <mesh
          name="floor_tile_large037"
          geometry={nodes.floor_tile_large037.geometry}
          material={materials["texture.073"]}
          position={[-8, 0, -19.919]}
        />
        <mesh
          name="floor_tile_large038"
          geometry={nodes.floor_tile_large038.geometry}
          material={materials["texture.074"]}
          position={[-12, 0, -19.919]}
        />
        <mesh
          name="floor_tile_large039"
          geometry={nodes.floor_tile_large039.geometry}
          material={materials["texture.075"]}
          position={[-12, 0, -15.919]}
        />
        <mesh
          name="floor_tile_large040"
          geometry={nodes.floor_tile_large040.geometry}
          material={materials["texture.076"]}
          position={[-8, 0, -15.919]}
        />
        <mesh
          name="floor_tile_large043"
          geometry={nodes.floor_tile_large043.geometry}
          material={materials["texture.079"]}
          position={[-8, 0, -11.919]}
        />
        <mesh
          name="floor_tile_large044"
          geometry={nodes.floor_tile_large044.geometry}
          material={materials["texture.080"]}
          position={[-12, 0, -11.919]}
        />
        <mesh
          name="floor_tile_large045"
          geometry={nodes.floor_tile_large045.geometry}
          material={materials["texture.081"]}
          position={[12, 0, -12]}
        />
        <mesh
          name="floor_tile_large047"
          geometry={nodes.floor_tile_large047.geometry}
          material={materials["texture.083"]}
          position={[8, 0, -12]}
        />
        <mesh
          name="floor_tile_large048"
          geometry={nodes.floor_tile_large048.geometry}
          material={materials["texture.084"]}
          position={[8, 0, -16]}
        />
        <mesh
          name="floor_tile_large050"
          geometry={nodes.floor_tile_large050.geometry}
          material={materials["texture.086"]}
          position={[12, 0, -16]}
        />
        <mesh
          name="floor_tile_large051"
          geometry={nodes.floor_tile_large051.geometry}
          material={materials["texture.087"]}
          position={[12, 0, -20]}
        />
        <mesh
          name="floor_tile_large053"
          geometry={nodes.floor_tile_large053.geometry}
          material={materials["texture.089"]}
          position={[8, 0, -20]}
        />
        <mesh
          name="floor_tile_large054"
          geometry={nodes.floor_tile_large054.geometry}
          material={materials["texture.090"]}
          position={[8, 0, 4]}
        />
        <mesh
          name="floor_tile_large056"
          geometry={nodes.floor_tile_large056.geometry}
          material={materials["texture.092"]}
          position={[12, 0, 4]}
        />
        <mesh
          name="floor_tile_large057"
          geometry={nodes.floor_tile_large057.geometry}
          material={materials["texture.093"]}
          position={[12, 0, 8]}
        />
        <mesh
          name="floor_tile_large059"
          geometry={nodes.floor_tile_large059.geometry}
          material={materials["texture.095"]}
          position={[8, 0, 8]}
        />
        <mesh
          name="floor_tile_large060"
          geometry={nodes.floor_tile_large060.geometry}
          material={materials["texture.096"]}
          position={[8, 0, 12]}
        />
        <mesh
          name="floor_tile_large062"
          geometry={nodes.floor_tile_large062.geometry}
          material={materials["texture.098"]}
          position={[12, 0, 12]}
        />
        <mesh
          name="floor_tile_large063"
          geometry={nodes.floor_tile_large063.geometry}
          material={materials["texture.099"]}
          position={[0, 0, 12]}
        />
        <mesh
          name="floor_tile_large064"
          geometry={nodes.floor_tile_large064.geometry}
          material={materials["texture.100"]}
          position={[4, 0, 12]}
        />
        <mesh
          name="floor_tile_large065"
          geometry={nodes.floor_tile_large065.geometry}
          material={materials["texture.101"]}
          position={[-4, 0, 12]}
        />
        <mesh
          name="floor_tile_large066"
          geometry={nodes.floor_tile_large066.geometry}
          material={materials["texture.102"]}
          position={[-4, 0, 8]}
        />
        <mesh
          name="floor_tile_large067"
          geometry={nodes.floor_tile_large067.geometry}
          material={materials["texture.103"]}
          position={[4, 0, 8]}
        />
        <mesh
          name="floor_tile_large068"
          geometry={nodes.floor_tile_large068.geometry}
          material={materials["texture.104"]}
          position={[0, 0, 8]}
        />
        <mesh
          name="floor_tile_large073"
          geometry={nodes.floor_tile_large073.geometry}
          material={materials["texture.109"]}
          position={[-8, 0, 4]}
        />
        <mesh
          name="floor_tile_large074"
          geometry={nodes.floor_tile_large074.geometry}
          material={materials["texture.110"]}
          position={[-12, 0, 4]}
        />
        <mesh
          name="floor_tile_large075"
          geometry={nodes.floor_tile_large075.geometry}
          material={materials["texture.111"]}
          position={[-12, 0, 8]}
        />
        <mesh
          name="floor_tile_large076"
          geometry={nodes.floor_tile_large076.geometry}
          material={materials["texture.112"]}
          position={[-8, 0, 8]}
        />
        <mesh
          name="floor_tile_large079"
          geometry={nodes.floor_tile_large079.geometry}
          material={materials["texture.115"]}
          position={[-8, 0, 12]}
        />
        <mesh
          name="floor_tile_large080"
          geometry={nodes.floor_tile_large080.geometry}
          material={materials["texture.116"]}
          position={[-12, 0, 12]}
        />
        <mesh
          name="wall_corner001"
          geometry={nodes.wall_corner001.geometry}
          material={materials["texture.175"]}
          position={[14, 0, 14]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          name="wall_shelves001"
          geometry={nodes.wall_shelves001.geometry}
          material={materials["texture.176"]}
          position={[-10, 0, -6]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="wall001"
          geometry={nodes.wall001.geometry}
          material={materials["texture.177"]}
          position={[10, 4, 14]}
        />
        <mesh
          name="wall_corner002"
          geometry={nodes.wall_corner002.geometry}
          material={materials["texture.178"]}
          position={[14, 4, 14]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          name="wall_inset_candles001"
          geometry={nodes.wall_inset_candles001.geometry}
          material={materials["texture.180"]}
          position={[14, 0, 10]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          name="wall003"
          geometry={nodes.wall003.geometry}
          material={materials["texture.181"]}
          position={[14, 4, 10]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall004"
          geometry={nodes.wall004.geometry}
          material={materials["texture.182"]}
          position={[6, 4, 14]}
        />
        <mesh
          name="wall006"
          geometry={nodes.wall006.geometry}
          material={materials["texture.184"]}
          position={[2, 4, 14]}
        />
        <mesh
          name="wall007"
          geometry={nodes.wall007.geometry}
          material={materials["texture.185"]}
          position={[2, 4, 14]}
        />
        <mesh
          name="wall009"
          geometry={nodes.wall009.geometry}
          material={materials["texture.187"]}
          position={[6, 4, 14]}
        />
        <mesh
          name="wall010"
          geometry={nodes.wall010.geometry}
          material={materials["texture.188"]}
          position={[10, 4, 14]}
        />
        <mesh
          name="wall011"
          geometry={nodes.wall011.geometry}
          material={materials["texture.189"]}
          position={[-6, 4, 14]}
        />
        <mesh
          name="wall013"
          geometry={nodes.wall013.geometry}
          material={materials["texture.191"]}
          position={[-10, 0, 14]}
        />
        <mesh
          name="wall_corner003"
          geometry={nodes.wall_corner003.geometry}
          material={materials["texture.192"]}
          position={[-14, 4, 14]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          name="wall014"
          geometry={nodes.wall014.geometry}
          material={materials["texture.195"]}
          position={[2, 0, 14]}
        />
        <mesh
          name="wall_archedwindow_gated001"
          geometry={nodes.wall_archedwindow_gated001.geometry}
          material={materials["texture.196"]}
          position={[-6, 0, 14]}
        />
        <mesh
          name="wall_doorway001"
          geometry={nodes.wall_doorway001.geometry}
          material={materials["texture.197"]}
          position={[-10, 0, 2]}
        />
        <mesh
          name="wall_Tsplit001"
          geometry={nodes.wall_Tsplit001.geometry}
          material={materials["texture.198"]}
          position={[-14, 0, 2]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall_corner004"
          geometry={nodes.wall_corner004.geometry}
          material={materials["texture.199"]}
          position={[-14, 0, 14]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          name="wall_inset_shelves_decoratedB001"
          geometry={nodes.wall_inset_shelves_decoratedB001.geometry}
          material={materials["texture.200"]}
          position={[-14, 0, -2]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall015"
          geometry={nodes.wall015.geometry}
          material={materials["texture.201"]}
          position={[-14, 4, 10]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall016"
          geometry={nodes.wall016.geometry}
          material={materials["texture.202"]}
          position={[-14, 4, 6]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall017"
          geometry={nodes.wall017.geometry}
          material={materials["texture.203"]}
          position={[-14, 0, 6]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall018"
          geometry={nodes.wall018.geometry}
          material={materials["texture.204"]}
          position={[-14, 0, 10]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall019"
          geometry={nodes.wall019.geometry}
          material={materials["texture.205"]}
          position={[-2, 4, 6]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall020"
          geometry={nodes.wall020.geometry}
          material={materials["texture.206"]}
          position={[-2, 4, 10]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall_Tsplit002"
          geometry={nodes.wall_Tsplit002.geometry}
          material={materials["texture.207"]}
          position={[-2, 4, 14]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="wall_doorway_scaffold_door001"
          geometry={nodes.wall_doorway_scaffold_door001.geometry}
          material={materials["texture.208"]}
          position={[-10.941, 0.09, 1.308]}
          rotation={[-1.236, 0.577, 1.053]}
        />
        <mesh
          name="wall_Tsplit003"
          geometry={nodes.wall_Tsplit003.geometry}
          material={materials["texture.212"]}
          position={[-14, 4, 2]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall_archedwindow_gated002"
          geometry={nodes.wall_archedwindow_gated002.geometry}
          material={materials["texture.213"]}
          position={[-2, 0, 6]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall_archedwindow_gated003"
          geometry={nodes.wall_archedwindow_gated003.geometry}
          material={materials["texture.214"]}
          position={[-2, 0, 10]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall_archedwindow_gated004"
          geometry={nodes.wall_archedwindow_gated004.geometry}
          material={materials["texture.215"]}
          position={[-6, 0, 2]}
        />
        <mesh
          name="wall005"
          geometry={nodes.wall005.geometry}
          material={materials["texture.216"]}
          position={[-6, 4, 2]}
        />
        <mesh
          name="wall008"
          geometry={nodes.wall008.geometry}
          material={materials["texture.217"]}
          position={[-10, 4, 2]}
        />
        <mesh
          name="wall_corner005"
          geometry={nodes.wall_corner005.geometry}
          material={materials["texture.218"]}
          position={[-2, 4, 2]}
        />
        <mesh
          name="wall012"
          geometry={nodes.wall012.geometry}
          material={materials["texture.219"]}
          position={[14, 0, 6]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall021"
          geometry={nodes.wall021.geometry}
          material={materials["texture.220"]}
          position={[14, 4, -2]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall022"
          geometry={nodes.wall022.geometry}
          material={materials["texture.221"]}
          position={[14, 0, 2]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall024"
          geometry={nodes.wall024.geometry}
          material={materials["texture.223"]}
          position={[14, 4, -18]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall025"
          geometry={nodes.wall025.geometry}
          material={materials["texture.224"]}
          position={[14, 0, -10]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall028"
          geometry={nodes.wall028.geometry}
          material={materials["texture.229"]}
          position={[-14, 4, -10]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall029"
          geometry={nodes.wall029.geometry}
          material={materials["texture.230"]}
          position={[-14, 4, -18]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall030"
          geometry={nodes.wall030.geometry}
          material={materials["texture.231"]}
          position={[-14, 4, -14]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall031"
          geometry={nodes.wall031.geometry}
          material={materials["texture.232"]}
          position={[-14, 4, -2]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall032"
          geometry={nodes.wall032.geometry}
          material={materials["texture.234"]}
          position={[10, 0, -22]}
        />
        <mesh
          name="wall033"
          geometry={nodes.wall033.geometry}
          material={materials["texture.235"]}
          position={[6, 4, -22]}
        />
        <mesh
          name="wall034"
          geometry={nodes.wall034.geometry}
          material={materials["texture.236"]}
          position={[2, 4, -22]}
        />
        <mesh
          name="wall035"
          geometry={nodes.wall035.geometry}
          material={materials["texture.237"]}
          position={[-10, 0, -22]}
        />
        <mesh
          name="wall036"
          geometry={nodes.wall036.geometry}
          material={materials["texture.238"]}
          position={[-6, 4, -22]}
        />
        <mesh
          name="wall_Tsplit004"
          geometry={nodes.wall_Tsplit004.geometry}
          material={materials["texture.240"]}
          position={[-14, 0, -6]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall_inset_shelves_decoratedA001"
          geometry={nodes.wall_inset_shelves_decoratedA001.geometry}
          material={materials["texture.242"]}
          position={[-6, 0, -6]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="floor_tile_large001"
          geometry={nodes.floor_tile_large001.geometry}
          material={materials["texture.243"]}
          position={[-4, 0, -4]}
        />
        <mesh
          name="floor_tile_large002"
          geometry={nodes.floor_tile_large002.geometry}
          material={materials["texture.244"]}
          position={[-4, 0, 0]}
        />
        <mesh
          name="floor_tile_large003"
          geometry={nodes.floor_tile_large003.geometry}
          material={materials["texture.245"]}
          position={[-4, 0, 4]}
        />
        <mesh
          name="floor_tile_large004"
          geometry={nodes.floor_tile_large004.geometry}
          material={materials["texture.246"]}
          position={[0, 0, 4]}
        />
        <mesh
          name="floor_tile_large005"
          geometry={nodes.floor_tile_large005.geometry}
          material={materials["texture.247"]}
        />
        <mesh
          name="floor_tile_large019"
          geometry={nodes.floor_tile_large019.geometry}
          material={materials["texture.248"]}
          position={[4, 0, 4]}
        />
        <mesh
          name="floor_tile_large022"
          geometry={nodes.floor_tile_large022.geometry}
          material={materials["texture.249"]}
          position={[4, 0, 0]}
        />
        <mesh
          name="floor_tile_large025"
          geometry={nodes.floor_tile_large025.geometry}
          material={materials["texture.250"]}
          position={[4, 0, -4]}
        />
        <mesh
          name="floor_tile_large029"
          geometry={nodes.floor_tile_large029.geometry}
          material={materials["texture.251"]}
          position={[0, 0, -4]}
        />
        <mesh
          name="floor_tile_large026"
          geometry={nodes.floor_tile_large026.geometry}
          material={materials["texture.254"]}
          position={[12, 0, 0]}
        />
        <mesh
          name="wall_archedwindow_gated006"
          geometry={nodes.wall_archedwindow_gated006.geometry}
          material={materials["texture.259"]}
          position={[-6, 0, -22]}
        />
        <mesh
          name="wall_corner006"
          geometry={nodes.wall_corner006.geometry}
          material={materials["texture.260"]}
          position={[14, 4, -22]}
        />
        <mesh
          name="wall_corner007"
          geometry={nodes.wall_corner007.geometry}
          material={materials["texture.261"]}
          position={[14, 0, -22]}
        />
        <mesh
          name="wall_corner009"
          geometry={nodes.wall_corner009.geometry}
          material={materials["texture.262"]}
          position={[-14, 4, -22]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall_corner010"
          geometry={nodes.wall_corner010.geometry}
          material={materials["texture.263"]}
          position={[-14, 0, -22]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall002"
          geometry={nodes.wall002.geometry}
          material={materials["texture.264"]}
          position={[-14, 0, -18]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="pillar_decorated001"
          geometry={nodes.pillar_decorated001.geometry}
          material={materials["texture.378"]}
          position={[10, 0.242, 6]}
          rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        />
        <mesh
          name="pillar_decorated002"
          geometry={nodes.pillar_decorated002.geometry}
          material={materials["texture.379"]}
          position={[2, 0.242, 6]}
          rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        />
        <mesh
          name="wall038"
          geometry={nodes.wall038.geometry}
          material={materials["texture.380"]}
          position={[14, 0, -18]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall040"
          geometry={nodes.wall040.geometry}
          material={materials["texture.382"]}
          position={[14, 4, -10]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall041"
          geometry={nodes.wall041.geometry}
          material={materials["texture.383"]}
          position={[14, 0, -2]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall042"
          geometry={nodes.wall042.geometry}
          material={materials["texture.384"]}
          position={[14, 4, 2]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall043"
          geometry={nodes.wall043.geometry}
          material={materials["texture.385"]}
          position={[14, 4, 6]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall044"
          geometry={nodes.wall044.geometry}
          material={materials["texture.386"]}
          position={[-10, 4, -22]}
        />
        <mesh
          name="wall045"
          geometry={nodes.wall045.geometry}
          material={materials["texture.387"]}
          position={[10, 4, -22]}
        />
        <mesh
          name="book_tan001"
          geometry={nodes.book_tan001.geometry}
          material={materials["texture.388"]}
          position={[13.362, 0.31, -11.947]}
          rotation={[-0.171, -1.029, -0.827]}
        />
        <mesh
          name="book_grey001"
          geometry={nodes.book_grey001.geometry}
          material={materials["texture.389"]}
          position={[13.244, 0.149, -11.573]}
          rotation={[-3.081, -0.603, -1.536]}
        />
        <mesh
          name="coin001"
          geometry={nodes.coin001.geometry}
          material={materials["texture.390"]}
          position={[-5.2, 1.718, -6.095]}
        />
        <mesh
          name="coin002"
          geometry={nodes.coin002.geometry}
          material={materials["texture.391"]}
          position={[-5.315, 1.82, -6.095]}
        />
        <mesh
          name="coin003"
          geometry={nodes.coin003.geometry}
          material={materials["texture.392"]}
          position={[-5.111, 1.911, -6.095]}
          rotation={[0, 0, -0.621]}
        />
        <mesh
          name="table_long001"
          geometry={nodes.table_long001.geometry}
          material={materials["texture.393"]}
          position={[-10, 0, -16.5]}
        />
        <mesh
          name="wall_Tsplit005"
          geometry={nodes.wall_Tsplit005.geometry}
          material={materials["texture.395"]}
          position={[-14, 4, -6]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall027"
          geometry={nodes.wall027.geometry}
          material={materials["texture.396"]}
          position={[-10, 4, -6]}
        />
        <mesh
          name="wall046"
          geometry={nodes.wall046.geometry}
          material={materials["texture.397"]}
          position={[-6, 4, -6]}
        />
        <mesh
          name="wall047"
          geometry={nodes.wall047.geometry}
          material={materials["texture.398"]}
          position={[-2, 4, -6]}
        />
        <mesh
          name="wall048"
          geometry={nodes.wall048.geometry}
          material={materials["texture.399"]}
          position={[-10, 4, 14]}
        />
        <mesh
          name="coin004"
          geometry={nodes.coin004.geometry}
          material={materials["texture.400"]}
          position={[5.996, 0.734, 8.697]}
        />
        <mesh
          name="coin005"
          geometry={nodes.coin005.geometry}
          material={materials["texture.401"]}
          position={[6.358, 0.618, 8.718]}
          rotation={[0, 0, -0.823]}
        />
        <mesh
          name="coin006"
          geometry={nodes.coin006.geometry}
          material={materials["texture.402"]}
          position={[6.191, 0.856, 8.697]}
        />
        <mesh
          name="coin007"
          geometry={nodes.coin007.geometry}
          material={materials["texture.403"]}
          position={[5.591, 0.653, 8.697]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          name="coin008"
          geometry={nodes.coin008.geometry}
          material={materials["texture.404"]}
          position={[5.756, 0.807, 8.697]}
          rotation={[0, 0, -2.193]}
        />
        <mesh
          name="wall049"
          geometry={nodes.wall049.geometry}
          material={materials["texture.405"]}
          position={[2, 4, -6]}
        />
        <mesh
          name="wall050"
          geometry={nodes.wall050.geometry}
          material={materials["texture.406"]}
          position={[6, 4, -6]}
        />
        <mesh
          name="wall_pillar001"
          geometry={nodes.wall_pillar001.geometry}
          material={materials["texture.409"]}
          position={[14, 4, -6]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall_inset001"
          geometry={nodes.wall_inset001.geometry}
          material={materials["texture.410"]}
          position={[6, 0, -6]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="torch_lit001"
          geometry={nodes.torch_lit001.geometry}
          material={materials["texture.411"]}
          position={[6, 2.201, 9.3]}
          rotation={[-0.726, Math.PI / 2, 0]}
        />
        <mesh
          name="candle001"
          geometry={nodes.candle001.geometry}
          material={materials["texture.412"]}
          position={[6.368, 0.799, -6.153]}
        />
        <mesh
          name="candle002"
          geometry={nodes.candle002.geometry}
          material={materials["texture.413"]}
          position={[5.598, 0.799, -6.153]}
        />
        <mesh
          name="chair002"
          geometry={nodes.chair002.geometry}
          material={materials["texture.415"]}
          position={[-9, 0, -12.5]}
        />
        <mesh
          name="chair003"
          geometry={nodes.chair003.geometry}
          material={materials["texture.416"]}
          position={[-9, 0, -13.5]}
        />
        <mesh
          name="chair005"
          geometry={nodes.chair005.geometry}
          material={materials["texture.418"]}
          position={[-9, 0, -15.5]}
        />
        <mesh
          name="chair006"
          geometry={nodes.chair006.geometry}
          material={materials["texture.419"]}
          position={[-9, 0, -16.5]}
        />
        <mesh
          name="chair007"
          geometry={nodes.chair007.geometry}
          material={materials["texture.420"]}
          position={[-9, 0, -17.5]}
        />
        <mesh
          name="chair008"
          geometry={nodes.chair008.geometry}
          material={materials["texture.421"]}
          position={[-10, 0, -18.5]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="chair009"
          geometry={nodes.chair009.geometry}
          material={materials["texture.422"]}
          position={[-11, 0, -16.5]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="chair010"
          geometry={nodes.chair010.geometry}
          material={materials["texture.423"]}
          position={[-11, 0, -17.5]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="chair011"
          geometry={nodes.chair011.geometry}
          material={materials["texture.424"]}
          position={[-11, 0, -15.5]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="chair013"
          geometry={nodes.chair013.geometry}
          material={materials["texture.426"]}
          position={[-11, 0, -12.5]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="chair014"
          geometry={nodes.chair014.geometry}
          material={materials["texture.427"]}
          position={[-11, 0, -13.5]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="chair015"
          geometry={nodes.chair015.geometry}
          material={materials["texture.428"]}
          position={[-11, 0, -11.5]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="chair016"
          geometry={nodes.chair016.geometry}
          material={materials["texture.429"]}
          position={[-10, 0, -10.5]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          name="plate_small001"
          geometry={nodes.plate_small001.geometry}
          material={materials["texture.430"]}
          position={[-10.7, 1, -12.5]}
        />
        <mesh
          name="plate_small002"
          geometry={nodes.plate_small002.geometry}
          material={materials["texture.431"]}
          position={[-10.7, 1, -11.5]}
        />
        <mesh
          name="plate_small003"
          geometry={nodes.plate_small003.geometry}
          material={materials["texture.432"]}
          position={[-9.3, 1, -12.5]}
        />
        <mesh
          name="plate_small004"
          geometry={nodes.plate_small004.geometry}
          material={materials["texture.433"]}
          position={[-9.3, 1, -13.5]}
        />
        <mesh
          name="plate_small005"
          geometry={nodes.plate_small005.geometry}
          material={materials["texture.434"]}
          position={[-10.7, 1, -13.5]}
        />
        <mesh
          name="plate_small006"
          geometry={nodes.plate_small006.geometry}
          material={materials["texture.435"]}
          position={[-10.7, 1, -17.5]}
        />
        <mesh
          name="plate_small007"
          geometry={nodes.plate_small007.geometry}
          material={materials["texture.436"]}
          position={[-9.3, 1, -17.5]}
        />
        <mesh
          name="plate_small008"
          geometry={nodes.plate_small008.geometry}
          material={materials["texture.437"]}
          position={[-9.3, 1, -16.5]}
        />
        <mesh
          name="plate_small009"
          geometry={nodes.plate_small009.geometry}
          material={materials["texture.438"]}
          position={[-10.7, 1, -15.5]}
        />
        <mesh
          name="plate_small010"
          geometry={nodes.plate_small010.geometry}
          material={materials["texture.439"]}
          position={[-10.7, 1, -16.5]}
        />
        <mesh
          name="plate_small011"
          geometry={nodes.plate_small011.geometry}
          material={materials["texture.440"]}
          position={[-9.3, 1, -15.5]}
        />
        <mesh
          name="plate_small012"
          geometry={nodes.plate_small012.geometry}
          material={materials["texture.446"]}
          position={[-10, 1, -18.2]}
        />
        <mesh
          name="plate_small013"
          geometry={nodes.plate_small013.geometry}
          material={materials["texture.447"]}
          position={[-10, 1, -10.8]}
        />
        <mesh
          name="bottle_A_labeled_brown001"
          geometry={nodes.bottle_A_labeled_brown001.geometry}
          material={materials["texture.450"]}
          position={[-10.051, 1, -11.731]}
        />
        <mesh
          name="bottle_A_labeled_brown002"
          geometry={nodes.bottle_A_labeled_brown002.geometry}
          material={materials["texture.451"]}
          position={[-10.019, 1, -14.454]}
          rotation={[Math.PI, -0.289, Math.PI]}
        />
        <mesh
          name="bottle_A_labeled_brown003"
          geometry={nodes.bottle_A_labeled_brown003.geometry}
          material={materials["texture.452"]}
          position={[-9.632, 1, -14.454]}
          rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        />
        <mesh
          name="bottle_A_labeled_brown004"
          geometry={nodes.bottle_A_labeled_brown004.geometry}
          material={materials["texture.453"]}
          position={[-9.82, 1, -14.076]}
          rotation={[0, 0.685, 0]}
        />
        <mesh
          name="bottle_A_labeled_brown005"
          geometry={nodes.bottle_A_labeled_brown005.geometry}
          material={materials["texture.454"]}
          position={[-10.01, 1, -17.426]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="wall026"
          geometry={nodes.wall026.geometry}
          material={materials["texture.455"]}
          position={[6, 0, -22]}
        />
        <mesh
          name="wall051"
          geometry={nodes.wall051.geometry}
          material={materials["texture.457"]}
          position={[2, 0, -22]}
        />
        <mesh
          name="bookcase_double_decoratedB001"
          geometry={nodes.bookcase_double_decoratedB001.geometry}
          material={materials["texture.458"]}
          position={[6.605, 0, -21.137]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="bookcase_double_decoratedB002"
          geometry={nodes.bookcase_double_decoratedB002.geometry}
          material={materials["texture.459"]}
          position={[1.668, 0, -14.92]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="bookcase_double_decoratedB003"
          geometry={nodes.bookcase_double_decoratedB003.geometry}
          material={materials["texture.460"]}
          position={[10.612, 0, -14.957]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="wall052"
          geometry={nodes.wall052.geometry}
          material={materials["texture.461"]}
          position={[10, 4, -14]}
        />
        <mesh
          name="wall054"
          geometry={nodes.wall054.geometry}
          material={materials["texture.463"]}
          position={[2, 4, -14]}
        />
        <mesh
          name="wall055"
          geometry={nodes.wall055.geometry}
          material={materials["texture.464"]}
          position={[-2, 4, -18]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="bookcase_double_decoratedB004"
          geometry={nodes.bookcase_double_decoratedB004.geometry}
          material={materials["texture.465"]}
          position={[-0.507, 0, -18.296]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          name="wall_corner008"
          geometry={nodes.wall_corner008.geometry}
          material={materials["texture.467"]}
          position={[-2, 4, -14]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          name="wall_Tsplit006"
          geometry={nodes.wall_Tsplit006.geometry}
          material={materials["texture.468"]}
          position={[-2, 4, -22]}
        />
        <mesh
          name="wall_Tsplit007"
          geometry={nodes.wall_Tsplit007.geometry}
          material={materials["texture.469"]}
          position={[14, 4, -14]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          name="bookcase_double_decoratedB005"
          geometry={nodes.bookcase_double_decoratedB005.geometry}
          material={materials["texture.470"]}
          position={[2.128, 0, -21.137]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="wall_Tsplit008"
          geometry={nodes.wall_Tsplit008.geometry}
          material={materials["texture.471"]}
          position={[14, 0, -14]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          name="wall023"
          geometry={nodes.wall023.geometry}
          material={materials["texture.472"]}
          position={[10, 0, -14]}
        />
        <mesh
          name="wall039"
          geometry={nodes.wall039.geometry}
          material={materials["texture.473"]}
          position={[2, 0, -14]}
        />
        <mesh
          name="wall_corner011"
          geometry={nodes.wall_corner011.geometry}
          material={materials["texture.474"]}
          position={[-2, 0, -14]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          name="wall053"
          geometry={nodes.wall053.geometry}
          material={materials["texture.475"]}
          position={[-2, 0, -18]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="wall_Tsplit009"
          geometry={nodes.wall_Tsplit009.geometry}
          material={materials["texture.476"]}
          position={[-2, 0, -22]}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[0, -1, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/src/assets/map/StartingLevel.glb");
